module Main exposing (Model(..), Msg(..), init, main, subscriptions, update, view)

import Browser
import Html exposing (Html, br, div, pre, text)
import Http
import Json.Decode exposing (Decoder, array, field, int, list, map4, string)
import List



-- MAIN


main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }



-- MODEL


type Model
    = Failure
    | Loading
    | Success (List Response)


init : () -> ( Model, Cmd Msg )
init _ =
    ( Loading
    , Http.get
        { url = "http://localhost:3000/data"
        , expect = Http.expectJson GotText jsonDecoder
        }
    )



-- UPDATE


type Msg
    = GotText (Result Http.Error (List Response))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotText result ->
            case result of
                Ok url ->
                    ( Success url, Cmd.none )

                Err _ ->
                    ( Failure, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- VIEW


view : Model -> Html Msg
view model =
    case model of
        Failure ->
            text "I was unable to load your book."

        Loading ->
            text "Loading..."

        Success fullText ->
            div [] (List.map draw fullText)


draw : Response -> Html Msg
draw value =
    div []
        [ div [] [ text value.tech ]
        , div [] [ text value.date ]
        , div [] [ text (String.fromInt value.found) ]
        , div [] [ text value.id ]
        ]


type alias Response =
    { id : String
    , tech : String
    , found : Int
    , date : String
    }


jsonDecoder : Decoder (List Response)
jsonDecoder =
    list responseDecoder


responseDecoder : Decoder Response
responseDecoder =
    map4 Response
        (field "id" string)
        (field "tech" string)
        (field "found" int)
        (field "date" string)
