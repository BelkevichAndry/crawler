module Docs.LineChart.Example1 exposing (main)

import Html
import LineChart
import LineChart.Area as Area
import LineChart.Axis as Axis
import LineChart.Axis.Intersection as Intersection
import LineChart.Axis.Line as AxisLine
import LineChart.Axis.Range as Range
import LineChart.Axis.Tick as Tick
import LineChart.Axis.Ticks as Ticks
import LineChart.Axis.Title as Title
import LineChart.Axis.Values as Values
import LineChart.Colors as Colors
import LineChart.Container as Container
import LineChart.Coordinate as Coordinate
import LineChart.Dots as Dots
import LineChart.Events as Events
import LineChart.Grid as Grid
import LineChart.Interpolation as Interpolation
import LineChart.Junk as Junk
import LineChart.Legends as Legends
import LineChart.Line as Line
import Time


main : Html.Html msg
main =
    chart


type alias Point =
    { x : Float, y : Float }


chart : Html.Html msg
chart =
    LineChart.viewCustom
        { x = xAxisConfig
        , y = Axis.default 400 "Vacancies" .y
        , container = Container.default "line-chart-1"
        , interpolation = Interpolation.default
        , intersection = Intersection.default
        , legends = Legends.default
        , events = Events.default
        , junk = Junk.default
        , grid = Grid.default
        , area = Area.default
        , line = Line.default
        , dots = Dots.default
        }
        [ LineChart.line Colors.blueLight Dots.square "Year" [ Point 1546300800000 0 ]

        -- [ Point 1546300800000 0
        -- , Point 1549021050943 1
        -- , Point 1551440250943 2
        -- , Point 1554118650943 3
        -- , Point 1556710650943 4
        -- , Point 1559389050943 5
        -- , Point 1561981050943 6
        -- , Point 1564659450943 7
        -- , Point 1567337850943 8
        -- , Point 1569929850943 9
        -- , Point 1572608250943 10
        -- , Point 1575200250943 11
        -- , Point 1577878650943 11
        -- , Point 1580557050943 11
        -- ]
        ]


xAxisConfig : Axis.Config Point msg
xAxisConfig =
    Axis.custom
        { title = Title.default "Year"
        , variable = Just << .x
        , pixels = 2000
        , range = Range.default
        , axisLine = AxisLine.default
        , ticks = ticksConfig
        }


ticksConfig : Ticks.Config msg
ticksConfig =
    Ticks.time Time.utc 12
