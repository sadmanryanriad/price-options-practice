import { CartesianGrid, LineChart as Lchart, Line, Tooltip, XAxis, YAxis } from 'recharts';
const LIneChart = () => {
    const studentMarksData = [
        { student: "Student 1", math: 85, physics: 78, chemistry: 90 },
        { student: "Student 2", math: 78, physics: 82, chemistry: 88 },
        { student: "Student 3", math: 92, physics: 88, chemistry: 94 },
        { student: "Student 4", math: 88, physics: 85, chemistry: 91 },
        { student: "Student 5", math: 76, physics: 72, chemistry: 80 },
        { student: "Student 6", math: 95, physics: 90, chemistry: 96 },
        { student: "Student 7", math: 82, physics: 76, chemistry: 84 },
        { student: "Student 8", math: 91, physics: 89, chemistry: 92 },
        { student: "Student 9", math: 89, physics: 84, chemistry: 90 },
        { student: "Student 10", math: 80, physics: 75, chemistry: 82 },
      ];
      
      
    return (
        <div>
            <Lchart width={1000} height={300} data={studentMarksData}>
                <Line type={'monotone'} dataKey={'math'} />
                <Line type={'monotone'} dataKey={'physics'} stroke='red' />
                <Line type={'monotone'} dataKey={'chemistry'} stroke='green' />
                <CartesianGrid stroke='#ccc' strokeDasharray={'5 '}></CartesianGrid>
                <XAxis dataKey={'student'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>

            </Lchart>
        </div>
    );
};

export default LIneChart;