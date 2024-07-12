export interface WeatherResponse {
    "@context": Array<ContextClass | string>;
    type:       string;
    geometry:   Geometry;
    properties: Properties;
}

export interface ContextClass {
    "@version": string;
    wx:         string;
    geo:        string;
    unit:       string;
    "@vocab":   string;
}

export interface Geometry {
    type:        string;
    coordinates: Array<Array<number[]>>;
}

export interface Properties {
    units:             string;
    forecastGenerator: string;
    generatedAt:       Date;
    updateTime:        Date;
    validTimes:        string;
    elevation:         Ation;
    periods:           Period[];
}

export interface Ation {
    unitCode: UnitCode;
    value:    number | null;
}

export enum UnitCode {
    WmoUnitM = "wmoUnit:m",
    WmoUnitPercent = "wmoUnit:percent",
}

export interface Period {
    number:                     number;
    name:                       string;
    startTime:                  Date;
    endTime:                    Date;
    isDaytime:                  boolean;
    temperature:                number;
    temperatureUnit:            TemperatureUnit;
    temperatureTrend:           string;
    probabilityOfPrecipitation: Ation;
    windSpeed:                  string;
    windDirection:              string;
    icon:                       string;
    shortForecast:              string;
    detailedForecast:           string;
}

export enum TemperatureUnit {
    F = "F",
}