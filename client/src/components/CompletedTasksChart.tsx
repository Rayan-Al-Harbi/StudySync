import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Task, Course } from "@shared/schema";
import { BarChart3 } from "lucide-react";

interface CompletedTasksChartProps {
  tasks: Task[];
  courses: Course[];
}

const CHART_COLORS = [
  "hsl(221, 83%, 53%)",
  "hsl(262, 83%, 58%)",
  "hsl(142, 71%, 45%)",
  "hsl(38, 92%, 50%)",
  "hsl(0, 84%, 60%)",
  "hsl(199, 89%, 48%)",
  "hsl(326, 78%, 60%)",
  "hsl(25, 95%, 53%)",
];

export function CompletedTasksChart({ tasks, courses }: CompletedTasksChartProps) {
  const chartData = useMemo(() => {
    return courses.map((course, index) => {
      const courseTasks = tasks.filter((t) => t.courseId === course.id);
      const completed = courseTasks.filter((t) => t.status === "completed").length;
      const pending = courseTasks.filter((t) => t.status === "pending").length;
      const total = courseTasks.length;
      
      return {
        name: course.name.length > 15 ? course.name.substring(0, 15) + "..." : course.name,
        fullName: course.name,
        completed,
        pending,
        total,
        color: course.accentColor || CHART_COLORS[index % CHART_COLORS.length],
      };
    });
  }, [tasks, courses]);

  const chartConfig = useMemo(() => {
    const config: ChartConfig = {
      completed: {
        label: "Completed",
        color: "hsl(142, 71%, 45%)",
      },
      pending: {
        label: "Pending",
        color: "hsl(220, 14%, 71%)",
      },
    };
    return config;
  }, []);

  const totalCompleted = chartData.reduce((sum, d) => sum + d.completed, 0);
  const totalTasks = chartData.reduce((sum, d) => sum + d.total, 0);
  const completionRate = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;

  if (courses.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Completed Tasks by Course
          </CardTitle>
          <CardDescription>Track your progress across courses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <BarChart3 className="w-12 h-12 text-muted-foreground mb-3" />
            <p className="text-muted-foreground">No task data available</p>
            <p className="text-sm text-muted-foreground mt-1">
              Complete some tasks to see your progress visualization
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Completed Tasks by Course
            </CardTitle>
            <CardDescription>Track your progress across courses</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{completionRate}%</div>
            <p className="text-xs text-muted-foreground">
              {totalCompleted} of {totalTasks} tasks
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" allowDecimals={false} />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={100}
              tick={{ fontSize: 12 }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value, payload) => {
                    if (payload && payload[0]) {
                      return payload[0].payload.fullName;
                    }
                    return value;
                  }}
                />
              }
            />
            <Bar 
              dataKey="pending" 
              name="Pending"
              stackId="a"
              fill="hsl(220, 14%, 71%)"
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="completed" 
              name="Completed"
              stackId="a"
              fill="hsl(142, 71%, 45%)"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ChartContainer>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(142, 71%, 45%)" }} />
            <span className="text-sm text-muted-foreground">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(220, 14%, 71%)" }} />
            <span className="text-sm text-muted-foreground">Pending</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
