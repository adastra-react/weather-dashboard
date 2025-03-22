// components/WeatherCard.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import WeatherCard from "./WeatherCard";

describe("WeatherCard Component", () => {
  const defaultProps = {
    cityName: "Test City",
    temp: 15,
    humidity: 70,
    pressure: 1013,
    weatherDesc: "clear sky",
    weatherIcon: "01d",
  };

  test("renders city name correctly", () => {
    render(<WeatherCard {...defaultProps} />);
    expect(screen.getByText("Test City")).toBeInTheDocument();
  });

  test("renders weather description correctly", () => {
    render(<WeatherCard {...defaultProps} />);
    expect(screen.getByText("clear sky")).toBeInTheDocument();
  });

  test("renders humidity correctly", () => {
    render(<WeatherCard {...defaultProps} />);
    expect(screen.getByText("70%")).toBeInTheDocument();
  });

  test("renders pressure correctly", () => {
    render(<WeatherCard {...defaultProps} />);
    expect(screen.getByText("1013 hPa")).toBeInTheDocument();
  });

  test("applies correct temperature class for cold temperature", () => {
    const coldProps = { ...defaultProps, temp: 3 };
    const { container } = render(<WeatherCard {...coldProps} />);
    const tempElement = container.querySelector(".temperature");
    expect(tempElement).toHaveClass("temp-cold");
  });

  test("applies correct temperature class for moderate temperature", () => {
    const moderateProps = { ...defaultProps, temp: 15 };
    const { container } = render(<WeatherCard {...moderateProps} />);
    const tempElement = container.querySelector(".temperature");
    expect(tempElement).toHaveClass("temp-moderate");
  });

  test("applies correct temperature class for hot temperature", () => {
    const hotProps = { ...defaultProps, temp: 30 };
    const { container } = render(<WeatherCard {...hotProps} />);
    const tempElement = container.querySelector(".temperature");
    expect(tempElement).toHaveClass("temp-hot");
  });
});
