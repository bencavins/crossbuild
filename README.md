# crossbuild

## Dataset

Got words/clues data from [this](https://www.kaggle.com/datasets/darinhawley/new-york-times-crossword-clues-answers-19932021) dataset of NYTimes crossword clues/answers from 1993-2021

Located in [backend/datasets/nytcrosswords.csv](./backend/datasets/nytcrosswords.csv)

## API Routes

### GET /api/words/length/\<int:length\>

Get all words & clues where word length is `length`

### GET /api/words/like/\<string:pattern\>

Get all words & clues where word matches the `pattern`.
Dashes are wildcards in the `pattern`. For example, the pattern "LO-E" matches
the words "LOVE" and "LOBE" but not "DOVE".
