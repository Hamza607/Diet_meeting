import React, { useState, useEffect } from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridRows } from "@visx/grid";
import { useTooltip, TooltipWithBounds, defaultStyles } from "@visx/tooltip";
import { Box, Typography } from "@mui/material";
import { Button } from "antd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import type { IProgressChart, DataPoint, Note } from "@types";
import { COLORS } from "@constants";
import { CategoryButton } from "@components";

// Generate dummy data for one year
const startDate = new Date(2025, 0, 1);
const fullData: DataPoint[] = [];
let currentWeight = 180;
for (let i = 0; i < 365; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  const noise = (Math.random() - 0.5) * 1.0;
  const drift = -0.02;
  currentWeight = Math.max(150, currentWeight + noise + drift);
  fullData.push({ date, weight: parseFloat(currentWeight.toFixed(1)) });
}
// Sample notes
const notes: Note[] = [
  { date: new Date(2025, 0, 15), text: "Started new diet program." },
  { date: new Date(2025, 1, 1), text: "Fell ill, lost appetite." },
  { date: new Date(2025, 2, 20), text: "Birthday party indulgence." },
  { date: new Date(2025, 5, 10), text: "Vacation – lots of walking." },
  {
    date: new Date(2025, 9, 5),
    text: "Had a birthday party and had 3 glasses of mimosa.",
  },
  { date: new Date(2025, 11, 17), text: "Weekend training." },
];

const ProgressChart: React.FC<IProgressChart> = ({
  width,
  height,
  handleNoteModalOpen,
  setNote,
}) => {
  const rangeOptions = ["1Y", "6M", "3M", "1M"] as const;
  type RangeOption = (typeof rangeOptions)[number];
  const [range, setRange] = useState<RangeOption>("3M");
  const [startIndex, setStartIndex] = useState(fullData.length - 90);
  const [chartMargin, setChartMargin] = useState({
    top: 20,
    right: 45,
    bottom: 60,
    left: 70,
  });

  // Update startIndex when range changes (show latest period for that range)
  useEffect(() => {
    const days =
      range === "1M" ? 30 : range === "3M" ? 90 : range === "6M" ? 180 : 365;
    setStartIndex(Math.max(0, fullData.length - days));
  }, [range]);

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth <= 640) {
        setChartMargin({ top: 20, right: 10, bottom: 40, left: 50 }); // your small screen margin
      } else {
        setChartMargin({ top: 20, right: 45, bottom: 60, left: 70 }); // default
      }
    };

    updateMargin(); // call once on mount
    window.addEventListener("resize", updateMargin);

    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  // Chart dimensions
  const margin = chartMargin;
  const innerWidth = width ? width - margin.left - margin.right : 100;
  const innerHeight = height ? height - margin.top - margin.bottom : 100;

  // Determine visible data slice
  const rangeDays =
    range === "1M" ? 30 : range === "3M" ? 90 : range === "6M" ? 180 : 365;
  const visibleData = fullData.slice(startIndex, startIndex + rangeDays);
  if (visibleData.length === 0) return null;

  // Create scales
  const xScale = scaleBand<number>({
    domain: visibleData.map((d) => d.date.getTime()),
    range: [0, innerWidth],
    padding: 0.1,
  });
  //   const weights = visibleData.map((d) => d.weight);
  const minWeight = 165;
  const maxWeight = 185;
  const yScale = scaleLinear<number>({
    domain: [minWeight, maxWeight],
    range: [innerHeight, 0],
    nice: true,
  });

  // X-axis tick generation
  const tickDates: Date[] = [];
  const startDateVis = visibleData[0].date;
  const endDateVis = visibleData[visibleData.length - 1].date;
  if (range === "1M" || range === "3M") {
    const interval = range === "1M" ? 5 : 15;
    for (let dt = new Date(startDateVis); dt <= endDateVis; ) {
      tickDates.push(new Date(dt));
      dt.setDate(dt.getDate() + interval);
    }
    const lastTick = tickDates[tickDates.length - 1];
    if (lastTick.getTime() !== endDateVis.getTime()) {
      tickDates.push(endDateVis);
    }
  } else if (range === "6M") {
    let dt = new Date(startDateVis.getFullYear(), startDateVis.getMonth(), 1);
    if (dt < startDateVis) dt.setMonth(dt.getMonth() + 1);
    while (dt <= endDateVis) {
      tickDates.push(new Date(dt));
      dt.setMonth(dt.getMonth() + 1);
    }
    if (
      tickDates.length === 0 ||
      tickDates[tickDates.length - 1].getTime() !== endDateVis.getTime()
    ) {
      tickDates.push(endDateVis);
    }
  } else if (range === "1Y") {
    const year = startDateVis.getFullYear();
    [0, 3, 6, 9].forEach((m) => {
      const qDate = new Date(year, m, 1);
      if (qDate >= startDateVis && qDate <= endDateVis) {
        tickDates.push(qDate);
      }
    });
    if (
      tickDates.length === 0 ||
      tickDates[tickDates.length - 1].getTime() !== endDateVis.getTime()
    ) {
      tickDates.push(endDateVis);
    }
  }
  const formatDateLabel = (date: Date) => {
    const mon = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
    const day = date.getDate();
    return range === "1Y" ? mon : `${mon} ${day}`;
  };

  // Tooltip setup
  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    showTooltip,
    hideTooltip,
  } = useTooltip<{ date: Date; note?: string }>();
  const tooltipStyles = {
    ...defaultStyles,
    backgroundColor: COLORS.white.main,
    borderRadius: 20,
    padding: "0.75em 0.625em 1em",
    boxShadow: "0 8px 10px 0 rgba(0, 0, 8, 0.25)",
  };

  // Determine trendline color
  const firstWeight = visibleData[0].weight;
  const lastWeight = visibleData[visibleData.length - 1].weight;
  const trendColor =
    lastWeight < firstWeight ? COLORS.success.light : COLORS.error.main;

  return (
    <Box className="border-[1px] border-solid border-primary-main rounded-[20px] py-[15px] relative">
      {/* Range selector buttons */}
      <Box className="flex flex-wrap sm:gap-4 gap-y-4 sm:justify-start justify-between px-[15px] mb-3">
        {rangeOptions.map((opt) => (
          <CategoryButton
            type={opt === range ? "primary" : "secondary"}
            key={opt}
            onClick={() => setRange(opt)}
            className={`${
              opt === "1M"
                ? "sm:w-[129px]"
                : opt === "1Y"
                ? "sm:w-[115px]"
                : "sm:w-[139px]"
            } w-[49%]`}
          >
            {opt === "1M"
              ? "1 Month"
              : opt === "3M"
              ? "3 Months"
              : opt === "6M"
              ? "6 Months"
              : "1 Year"}
          </CategoryButton>
        ))}
      </Box>

      <Box component="svg" width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          {/* Grid lines */}
          <GridRows
            scale={yScale}
            width={innerWidth}
            stroke={COLORS.gray.thinnest}
            strokeDasharray="4,4"
            pointerEvents="none"
          />
          {/* Y Axis */}
          <AxisLeft
            scale={yScale}
            stroke={"none"}
            tickStroke={"none"}
            numTicks={5}
            tickLabelProps={() => ({
              fill: COLORS.secondary.light,
              fontSize: 10,
              fontFamily: "Inter-Medium, sans-serif",
              fontWeight: 500,
              dx: window.innerWidth <= 640 ? -15 : -22,
              dy: 13,
            })}
            label="Weight (lb)"
            labelProps={{
              fill: COLORS.secondary.light,
              fontSize: 12,
              fontFamily: "Inter-Medium, sans-serif",
              fontWeight: 500,
              textAnchor: "middle",
              angle: -90,
              dx: window.innerWidth <= 640 ? 10 : 0,
            }}
          />
          {/* X Axis */}
          <AxisBottom
            top={innerHeight}
            scale={xScale}
            tickValues={tickDates.map((d) => d.getTime())}
            tickFormat={(val) => formatDateLabel(new Date(+val))}
            stroke={"none"}
            tickStroke={"none"}
            tickLabelProps={() => ({
              fill: COLORS.secondary.light,
              fontSize: 10,
              fontFamily: "Inter-Medium, sans-serif",
              fontWeight: 500,
              dx: range === "1M" ? -10 : -2,
              dy: range === "1M" ? 6 : 3,
            })}
          />

          {/* Bars and Notes */}
          {visibleData.map((d) => {
            const dateKey = d.date.getTime();
            const barX = xScale(dateKey);
            if (barX == null) return null;
            const barWidth = xScale.bandwidth();
            const barY = yScale(d.weight);
            const barHeight = innerHeight - barY;
            const note = notes.find((n) => n.date.getTime() === dateKey);
            return (
              <Group key={dateKey}>
                <Bar
                  x={barX}
                  y={barY}
                  width={barWidth}
                  height={barHeight}
                  fill={COLORS.primary.thin}
                  rx={10}
                  ry={10}
                  onClick={() => {
                    console.log("Bar clicked:", d.date.toDateString());
                  }}
                  //   onMouseLeave={() => hideTooltip()}
                  //   onMouseMove={() => {
                  //     showTooltip({
                  //       tooltipData: { date: d.date, note: note?.text },
                  //       tooltipLeft: margin.left + barX + barWidth - 45,
                  //       tooltipTop:
                  //         window.innerWidth <= 640
                  //           ? margin.top + barY + 20
                  //           : margin.top + barY - 20,
                  //     });
                  //   }}
                />
                {note && (
                  <Box
                    component="circle"
                    cx={barX + barWidth / 2}
                    cy={range === "1M" ? innerHeight + 7 : innerHeight + 5}
                    r={
                      range === "1M"
                        ? 5
                        : range === "3M"
                        ? 4
                        : range === "6M"
                        ? 3
                        : 2
                    }
                    cursor="pointer"
                    fill={COLORS.primary.strong}
                    onMouseEnter={() => {
                      const dotX = margin.left + barX + barWidth / 2;
                      const dotY = margin.top + innerHeight + 5;
                      showTooltip({
                        tooltipData: { date: d.date, note: note.text },
                        tooltipLeft: dotX - 40, // Center tooltip (assuming ~150px width)
                        tooltipTop:
                          window.innerWidth <= 640 ? dotY + 10 : dotY - 40,
                      });
                    }}
                    onMouseLeave={hideTooltip}
                    onClick={() => {
                      setNote(note?.text || "");
                      handleNoteModalOpen();
                    }}
                  />
                )}
              </Group>
            );
          })}

          {/* Trendline */}
          <Box
            component="line"
            x1={xScale(visibleData[0].date.getTime())! + xScale.bandwidth() / 2}
            y1={yScale(firstWeight)}
            x2={
              xScale(visibleData[visibleData.length - 1].date.getTime())! +
              xScale.bandwidth() / 2
            }
            y2={yScale(lastWeight)}
            stroke={trendColor}
            strokeWidth={2}
            strokeOpacity={0.5}
          />
        </Group>
      </Box>

      {/* Pagination controls */}
      <Box className="w-full max-w-[320px] flex justify-between items-center mx-auto px-3">
        <Button
          onClick={() => setStartIndex(Math.max(0, startIndex - rangeDays))}
          disabled={startIndex <= 0}
          className={`!w-[32px] !h-[32px] rounded-lg border-none !text-white-main p-0 !shadow-none ${
            startIndex <= 0 ? "cursor-not-allowed" : "cursor-pointer"
          } ${startIndex <= 0 ? "!bg-gray-thinner" : "!bg-primary-main"}`}
        >
          <ArrowBackIosNewIcon fontSize="medium" />
        </Button>
        <Typography className="text-[10px] text-secondary-light">
          {visibleData[0].date.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}{" "}
          –{" "}
          {visibleData[visibleData.length - 1].date.toLocaleDateString(
            undefined,
            { month: "short", day: "numeric", year: "numeric" }
          )}
        </Typography>
        <Button
          onClick={() =>
            setStartIndex(
              Math.min(fullData.length - rangeDays, startIndex + rangeDays)
            )
          }
          disabled={startIndex + rangeDays >= fullData.length}
          className={`!w-[32px] !h-[32px] rounded-lg border-none !text-white-main p-0 !shadow-none ${
            startIndex + rangeDays >= fullData.length
              ? "cursor-not-allowed"
              : "cursor-pointer"
          } ${
            startIndex + rangeDays >= fullData.length
              ? "!bg-gray-thinner"
              : "!bg-primary-main"
          }`}
        >
          <ArrowForwardIosIcon fontSize="medium" />
        </Button>
      </Box>

      {/* Tooltip */}
      {tooltipOpen && tooltipData && (
        <TooltipWithBounds
          left={tooltipLeft}
          top={tooltipTop}
          style={tooltipStyles}
        >
          <Box className="w-auto max-w-[300px]">
            <Typography className="text-[10px] text-secondary-thin mb-1">
              Note on{"  "}
              {tooltipData.date.toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </Typography>
            <Typography className="text-xs">{tooltipData.note}</Typography>
          </Box>
          <Box className="w-[25px] h-[22px] bg-white-main absolute -bottom-[10px] left-[15px] rotate-[45deg] origin-[0 100px] z-9"></Box>
        </TooltipWithBounds>
      )}
    </Box>
  );
};

export default ProgressChart;
