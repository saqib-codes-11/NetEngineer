import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

export default function BasicTimeline() {
  const style = {
    background: "white"
  };
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector style={style}>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                  </TimelineItem>
                </TimelineConnector>
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </TimelineConnector>
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector style={style}>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                  </TimelineItem>
                </TimelineConnector>
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </TimelineConnector>
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector style={style}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector style={style}>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                  </TimelineItem>
                </TimelineConnector>
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
          </TimelineConnector>
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
