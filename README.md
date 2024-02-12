# crossbuild

## Dataset

Got words/clues data from [this](https://www.kaggle.com/datasets/darinhawley/new-york-times-crossword-clues-answers-19932021) dataset of NYTimes crossword clues/answers from 1993-2021

Located in [backend/datasets/nytcrosswords.csv](./backend/datasets/nytcrosswords.csv)

## API Routes

### GET /api/words

Get all words & clues

#### Query Parameters:

| Param | Description | Type |
|-------|-------------|------|
| length | Filter on word length | integer |
| like | Filter on like words (e.g. "LO-E" matches "LOVE" and "LOBE") | string

