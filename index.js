const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get('/', (req, res) => res.send([{tech: "Java", frequyoency: 22}]))
app.get('/', (req, res) => res.send("file:///Users/andrew/Documents/public/index.html"))

app.get('/data', (req, res) => res.json(data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

let data =
        [{
            id: "5d51789dbfc81b91d0404edf",
            tech: 'java',
            info: [
                {
                    found: 6822,
                    date: "2019-01-01T14:33:01.805Z"
                },
                {
                    found: 6991,
                    date: "2019-02-01T14:33:01.805Z"
                },
                {
                    found: 7091,
                    date: "2019-03-01T14:33:01.805Z"
                },
                {
                    found: 7191,
                    date: "2019-04-01T14:33:01.805Z"
                },
                {
                    found: 7291,
                    date: "2019-05-01T14:33:01.805Z"
                },
                {
                    found: 7391,
                    date: "2019-06-01T14:33:01.805Z"
                },
                {
                    found: 7491,
                    date: "2019-07-01T14:33:01.805Z"
                },
                {
                    found: 7591,
                    date: "2019-08-01T14:33:01.805Z"
                },
                {
                    found: 7411,
                    date: "2019-09-01T14:33:01.805Z"
                },
                {
                    found: 7519,
                    date: "2019-10-01T14:33:01.805Z"
                },
                {
                    found: 6891,
                    date: "2019-11-01T14:33:01.805Z"
                },
                {
                    found: 6491,
                    date: "2019-12-01T14:33:01.805Z"
                },

            ]

        },
            // {
            //     id: "5d51789ebfc81b91d0404ee0",
            //     tech: 'javascript',
            //     found: 10278,
            //     date: "2019-08-12T14:33:02.034Z"
            // },
            // {
            //     id: "5d51789ebfc81b91d0404ee1",
            //     tech: 'c#',
            //     found: 24606,
            //     date: "2019-08-12T14:33:02.311Z"
            // },
            // {
            //     id: "5d51789ebfc81b91d0404ee2",
            //     tech: 'python',
            //     found: 6492,
            //     date: "2019-08-12T14:33:02.573Z"
            // },
            // {
            //     id: "5d51789ebfc81b91d0404ee3",
            //     tech: 'c++',
            //     found: 24606,
            //     date: "2019-08-12T14:33:02.836Z"
            // },
            // {
            //     id: "5d51789fbfc81b91d0404ee4",
            //     tech: 'android',
            //     found: 4452,
            //     date: "2019-08-12T14:33:03.050Z"
            // },
            // {
            //     id: "5d51789fbfc81b91d0404ee5",
            //     tech: 'ruby',
            //     found: 895,
            //     date: "2019-08-12T14:33:03.306Z"
            // },
            // {
            //     id: "5d51789fbfc81b91d0404ee6",
            //     tech: 'c++',
            //     found: 24606,
            //     date: "2019-08-12T14:33:03.553Z"
            // },
            // {
            //     id: "5d51789fbfc81b91d0404ee7",
            //     tech: 'swift',
            //     found: 902,
            //     date: "2019-08-12T14:33:03.789Z"
            // },
            // {
            //     id: "5d5178a0bfc81b91d0404ee8",
            //     tech: 'TypeScript',
            //     found: 1415,
            //     date: "2019-08-12T14:33:04.039Z"
            // },
            // {
            //     id: "5d5178a0bfc81b91d0404ee9",
            //     tech: 'Go',
            //     found: 1613,
            //     date: "2019-08-12T14:33:04.306Z"
            // },
            // {
            //     id: "5d5178a0bfc81b91d0404eea",
            //     tech: 'SQL',
            //     found: 14940,
            //     date: "2019-08-12T14:33:04.588Z"
            // },
            // {
            //     id: "5d5178a0bfc81b91d0404eeb",
            //     tech: 'R',
            //     found: 4088,
            //     date: "2019-08-12T14:33:04.815Z"
            // },
            // {
            //     id: "5d5178a1bfc81b91d0404eec",
            //     tech: 'PHP',
            //     found: 5099,
            //     date: "2019-08-12T14:33:05.096Z"
            // },
            // {
            //     id: "5d5178a1bfc81b91d0404eed",
            //     tech: 'Perl',
            //     found: 590,
            //     date: " 2019-08-12T14:33:05.374Z"
            // },
            // {
            //     id: "5d5178a1bfc81b91d0404eee",
            //     tech: 'Kotlin',
            //     found: 1012,
            //     date: " 2019-08-12T14:33:05.611Z"
            // },
            // {
            //     id: "5d5178a1bfc81b91d0404eef",
            //     tech: 'Rust',
            //     found: 51,
            //     date: "2019-08-12T14:33:05.880Z"
            // },
            // {
            //     id: "5d5178a2bfc81b91d0404ef0",
            //     tech: 'Erlang',
            //     found: 79,
            //     date: "2019-08-12T14:33:06.130Z"
            // },
            // {
            //     id: "5d5178a2bfc81b91d0404ef1",
            //     tech: 'Scala',
            //     found: 571,
            //     date: "2019-08-12T14:33:06.353Z"
            // },
            // {
            //     id: "5d5178a2bfc81b91d0404ef2",
            //     tech: 'Elixir',
            //     found: 44,
            //     date: "2019-08-12T14:33:06.614Z"
            // },
            // {
            //     id: "5d5178a2bfc81b91d0404ef3",
            //     tech: 'Haskell',
            //     found: 41,
            //     date: "2019-08-12T14:33:06.901Z "
            // }
            ]

