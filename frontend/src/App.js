import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Chart.js의 스케일 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stockData = [
  { id: 1, name: "Apple", price: 172.34, change: "+1.2%" },
  { id: 2, name: "Microsoft", price: 315.12, change: "-0.8%" },
  { id: 3, name: "Tesla", price: 209.73, change: "+3.5%" },
];

const columns = [
  { field: "name", headerName: "Company", width: 150 },
  { field: "price", headerName: "Price ($)", width: 150 },
  { field: "change", headerName: "Change (%)", width: 150 },
];

const lineChartData = {
  labels: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM"],
  datasets: [
    {
      label: "AAPL",
      data: [170, 172, 171, 172.5, 173],
      fill: false,
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

console.log(stockData); // 데이터를 확인

function App() {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "black", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px", color: "white" }}>
        Stock Dashboard
      </Typography>

      {/* Stock Table */}
      <Box sx={{ height: 300, marginBottom: "20px" }}>
        <DataGrid
          rows={stockData}
          columns={columns}
          pageSize={5} // 페이지 크기 설정
          sx={{
            border: "none",
            backgroundColor: "#333", // 테이블 배경색
            color: "white", // 텍스트 색상
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #444", // 셀 경계선
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#555", // 헤더 배경색
              color: "white", // 헤더 텍스트 색상
            },
          }}
        />
      </Box>

      {/* Stock Chart */}
      <Box sx={{ height: 400 }}>
        <Typography variant="h6" sx={{ marginBottom: "10px", color: "white" }}>
          Stock Price Trends
        </Typography>
        <Line data={lineChartData} options={{ responsive: true }} />
      </Box>
    </Box>
  );
}

export default App;
