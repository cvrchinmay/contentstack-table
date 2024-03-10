export enum ColumnType {
  NUMERIC = 'numeric',
  TEXT = 'text',
  CHIP = 'chip'
}

export enum SortType {
  ASC = 'asc',
  DEC = 'dec',
  NO_SORT = 'no_sort'
}

export const TEXT_ALLIGNMENT = {
    [ColumnType.NUMERIC]: 'text-right',
    [ColumnType.TEXT]: 'text-left',
    [ColumnType.CHIP]: 'text-center pr-8',
}

export const PAGE_SIZE = 25;

export const COLUMN_CONFIG = [
  {
    key: "id",
    title: "Rank",
    type: ColumnType.NUMERIC,
    width: 200
  },{
  key: "movieName",
  title: "Movie Name",
  type: ColumnType.TEXT,
  width: 200
},
{
  key: "language",
  title: "Language",
  type: ColumnType.TEXT,
  width: 220
    },
    {
        key: "imdbRating",
        title: "Rating",
        type: ColumnType.NUMERIC,
        width: 220
    },
    {
        key: "genre",
        title: "Genre",
        type: ColumnType.CHIP,
        width: 220
      },
{
  key: "noOfActors",
  title: "Actor Count",
  type: ColumnType.TEXT,
  width: 220
},
{
  key: "releaseDate",
  title: "Release Date",
  type: ColumnType.TEXT,
  width: 200
}];

export const ROW_DATA = [{
    id: 37347,
    movieName: 'Movie 0',
    language: 'NA',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 8.35,
    releaseDate: '2007-06-29'
  },
  {
    id: 79634,
    movieName: 'Movie 1',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 9.66,
    releaseDate: '2000-07-23'
  },
  {
    id: 72048,
    movieName: 'Movie 2',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 9.8,
    releaseDate: '2002-07-25'
  },
  {
    id: 62809,
    movieName: 'Movie 3',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 8.38,
    releaseDate: '2011-02-28'
  },
  {
    id: 40556,
    movieName: 'Movie 4',
    language: 'NA',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 7.81,
    releaseDate: '2009-09-28'
  },
  {
    id: 48748,
    movieName: 'Movie 5',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 9.29,
    releaseDate: '2005-07-09'
  },
  {
    id: 34151,
    movieName: 'Movie 6',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 2.38,
    releaseDate: '2015-07-22'
  },
  {
    id: 31578,
    movieName: 'Movie 7',
    language: 'NA',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 5.41,
    releaseDate: '2006-04-21'
  },
  {
    id: 17703,
    movieName: 'Movie 8',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 7.27,
    releaseDate: '2010-04-03'
  },
  {
    id: 70712,
    movieName: 'Movie 9',
    language: 'English',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 5.28,
    releaseDate: '2022-03-19'
  },
  {
    id: 26322,
    movieName: 'Movie 10',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 4.97,
    releaseDate: '2017-05-15'
  },
  {
    id: 66467,
    movieName: 'Movie 11',
    language: 'English',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 1.57,
    releaseDate: '2011-02-28'
  },
  {
    id: 70621,
    movieName: 'Movie 12',
    language: 'NA',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 8.66,
    releaseDate: '2023-05-14'
  },
  {
    id: 57464,
    movieName: 'Movie 13',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 7.35,
    releaseDate: '2014-12-11'
  },
  {
    id: 68883,
    movieName: 'Movie 14',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 1.26,
    releaseDate: '2003-02-17'
  },
  {
    id: 24791,
    movieName: 'Movie 15',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 9.12,
    releaseDate: '2023-04-07'
  },
  {
    id: 31348,
    movieName: 'Movie 16',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 8.08,
    releaseDate: '2004-04-10'
  },
  {
    id: 41075,
    movieName: 'Movie 17',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 2.25,
    releaseDate: '2001-02-16'
  },
  {
    id: 49171,
    movieName: 'Movie 18',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 6.32,
    releaseDate: '2007-11-24'
  },
  {
    id: 52110,
    movieName: 'Movie 19',
    language: 'NA',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 8.84,
    releaseDate: '2001-02-26'
  },
  {
    id: 42556,
    movieName: 'Movie 20',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 7.77,
    releaseDate: '2008-07-23'
  },
  {
    id: 23179,
    movieName: 'Movie 21',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 2.92,
    releaseDate: '2024-03-02'
  },
  {
    id: 75261,
    movieName: 'Movie 22',
    language: 'English',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 2.86,
    releaseDate: '2014-10-23'
  },
  {
    id: 39595,
    movieName: 'Movie 23',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 3.35,
    releaseDate: '2001-12-30'
  },
  {
    id: 59444,
    movieName: 'Movie 24',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 8.73,
    releaseDate: '2001-10-24'
  },
  {
    id: 27698,
    movieName: 'Movie 25',
    language: 'NA',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 3.68,
    releaseDate: '2005-05-04'
  },
  {
    id: 41164,
    movieName: 'Movie 26',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 9.5,
    releaseDate: '2022-10-30'
  },
  {
    id: 67238,
    movieName: 'Movie 27',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 8.58,
    releaseDate: '2022-12-21'
  },
  {
    id: 49697,
    movieName: 'Movie 28',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 6.83,
    releaseDate: '2022-04-17'
  },
  {
    id: 55735,
    movieName: 'Movie 29',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 8.33,
    releaseDate: '2002-07-12'
  },
  {
    id: 45925,
    movieName: 'Movie 30',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 2.97,
    releaseDate: '2001-05-04'
  },
  {
    id: 27149,
    movieName: 'Movie 31',
    language: 'NA',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 9.41,
    releaseDate: '2007-08-14'
  },
  {
    id: 65621,
    movieName: 'Movie 32',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 1.32,
    releaseDate: '2015-08-11'
  },
  {
    id: 63753,
    movieName: 'Movie 33',
    language: 'NA',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 2.12,
    releaseDate: '2017-11-15'
  },
  {
    id: 38962,
    movieName: 'Movie 34',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 4.76,
    releaseDate: '2000-04-29'
  },
  {
    id: 31987,
    movieName: 'Movie 35',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 3.73,
    releaseDate: '2008-11-19'
  },
  {
    id: 76364,
    movieName: 'Movie 36',
    language: 'NA',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 8.91,
    releaseDate: '2023-03-07'
  },
  {
    id: 62813,
    movieName: 'Movie 37',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 6.54,
    releaseDate: '2010-03-21'
  },
  {
    id: 39343,
    movieName: 'Movie 38',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 7.37,
    releaseDate: '2012-07-02'
  },
  {
    id: 56822,
    movieName: 'Movie 39',
    language: 'English',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 3.91,
    releaseDate: '2016-07-09'
  },
  {
    id: 35758,
    movieName: 'Movie 40',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 4.35,
    releaseDate: '2014-07-28'
  },
  {
    id: 29204,
    movieName: 'Movie 41',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 5.18,
    releaseDate: '2022-01-16'
  },
  {
    id: 52731,
    movieName: 'Movie 42',
    language: 'NA',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 4.18,
    releaseDate: '2003-01-18'
  },
  {
    id: 17860,
    movieName: 'Movie 43',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 1.9,
    releaseDate: '2023-09-15'
  },
  {
    id: 60371,
    movieName: 'Movie 44',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 2.68,
    releaseDate: '2005-07-07'
  },
  {
    id: 59249,
    movieName: 'Movie 45',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 1.79,
    releaseDate: '2019-09-10'
  },
  {
    id: 70285,
    movieName: 'Movie 46',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 5.96,
    releaseDate: '2010-04-01'
  },
  {
    id: 52857,
    movieName: 'Movie 47',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 9.92,
    releaseDate: '2006-02-07'
  },
  {
    id: 24329,
    movieName: 'Movie 48',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 3.79,
    releaseDate: '2007-02-24'
  },
  {
    id: 50554,
    movieName: 'Movie 49',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 5.89,
    releaseDate: '2014-06-08'
  },
  {
    id: 57274,
    movieName: 'Movie 50',
    language: 'English',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 7.29,
    releaseDate: '2007-06-10'
  },
  {
    id: 81827,
    movieName: 'Movie 51',
    language: 'English',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 5.76,
    releaseDate: '2003-10-11'
  },
  {
    id: 42915,
    movieName: 'Movie 52',
    language: 'NA',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 6.02,
    releaseDate: '2004-06-27'
  },
  {
    id: 63919,
    movieName: 'Movie 53',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 1.52,
    releaseDate: '2018-06-28'
  },
  {
    id: 78347,
    movieName: 'Movie 54',
    language: 'English',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 5.32,
    releaseDate: '2012-01-14'
  },
  {
    id: 19326,
    movieName: 'Movie 55',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 1.68,
    releaseDate: '2023-10-11'
  },
  {
    id: 28865,
    movieName: 'Movie 56',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 9.4,
    releaseDate: '2012-03-13'
  },
  {
    id: 27139,
    movieName: 'Movie 57',
    language: 'NA',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 1.5,
    releaseDate: '2007-05-18'
  },
  {
    id: 80681,
    movieName: 'Movie 58',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 8.65,
    releaseDate: '2022-01-18'
  },
  {
    id: 35146,
    movieName: 'Movie 59',
    language: 'NA',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 9.16,
    releaseDate: '2018-11-03'
  },
  {
    id: 24659,
    movieName: 'Movie 60',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 7.04,
    releaseDate: '2021-06-05'
  },
  {
    id: 51091,
    movieName: 'Movie 61',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 1.37,
    releaseDate: '2015-01-16'
  },
  {
    id: 65907,
    movieName: 'Movie 62',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 7.64,
    releaseDate: '2014-06-23'
  },
  {
    id: 33529,
    movieName: 'Movie 63',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 2.51,
    releaseDate: '2015-10-06'
  },
  {
    id: 63628,
    movieName: 'Movie 64',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 2.92,
    releaseDate: '2001-04-08'
  },
  {
    id: 36765,
    movieName: 'Movie 65',
    language: 'English',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 1.21,
    releaseDate: '2022-03-01'
  },
  {
    id: 52845,
    movieName: 'Movie 66',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 7.14,
    releaseDate: '2020-06-06'
  },
  {
    id: 45533,
    movieName: 'Movie 67',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 2.56,
    releaseDate: '2022-12-08'
  },
  {
    id: 38992,
    movieName: 'Movie 68',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 2.58,
    releaseDate: '2013-11-10'
  },
  {
    id: 24082,
    movieName: 'Movie 69',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 4.96,
    releaseDate: '2006-07-17'
  },
  {
    id: 40604,
    movieName: 'Movie 70',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 9.75,
    releaseDate: '2014-01-27'
  },
  {
    id: 27468,
    movieName: 'Movie 71',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 8,
    releaseDate: '2001-09-07'
  },
  {
    id: 27626,
    movieName: 'Movie 72',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 7.64,
    releaseDate: '2013-09-02'
  },
  {
    id: 71017,
    movieName: 'Movie 73',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 5.44,
    releaseDate: '2011-08-18'
  },
  {
    id: 21383,
    movieName: 'Movie 74',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 2.39,
    releaseDate: '2022-01-05'
  },
  {
    id: 67493,
    movieName: 'Movie 75',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 9.83,
    releaseDate: '2020-12-14'
  },
  {
    id: 51076,
    movieName: 'Movie 76',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 3.24,
    releaseDate: '2010-06-07'
  },
  {
    id: 51837,
    movieName: 'Movie 77',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 1.84,
    releaseDate: '2005-03-31'
  },
  {
    id: 26307,
    movieName: 'Movie 78',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 1.96,
    releaseDate: '2014-12-15'
  },
  {
    id: 22525,
    movieName: 'Movie 79',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 3.92,
    releaseDate: '2007-12-12'
  },
  {
    id: 65613,
    movieName: 'Movie 80',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 3.06,
    releaseDate: '2012-02-19'
  },
  {
    id: 44385,
    movieName: 'Movie 81',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 8.98,
    releaseDate: '2020-10-09'
  },
  {
    id: 16560,
    movieName: 'Movie 82',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 6.5,
    releaseDate: '2004-04-04'
  },
  {
    id: 65498,
    movieName: 'Movie 83',
    language: 'NA',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 2.8,
    releaseDate: '2004-12-19'
  },
  {
    id: 57306,
    movieName: 'Movie 84',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 2.67,
    releaseDate: '2002-08-29'
  },
  {
    id: 44234,
    movieName: 'Movie 85',
    language: 'NA',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 6.73,
    releaseDate: '2014-12-11'
  },
  {
    id: 78960,
    movieName: 'Movie 86',
    language: 'NA',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 2.46,
    releaseDate: '2023-10-06'
  },
  {
    id: 37740,
    movieName: 'Movie 87',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 7.34,
    releaseDate: '2004-06-20'
  },
  {
    id: 67739,
    movieName: 'Movie 88',
    language: 'NA',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 8.88,
    releaseDate: '2011-09-03'
  },
  {
    id: 42732,
    movieName: 'Movie 89',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 5.82,
    releaseDate: '2006-09-16'
  },
  {
    id: 63497,
    movieName: 'Movie 90',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 8.52,
    releaseDate: '2001-09-13'
  },
  {
    id: 75244,
    movieName: 'Movie 91',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 1.75,
    releaseDate: '2023-02-14'
  },
  {
    id: 67559,
    movieName: 'Movie 92',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 9.03,
    releaseDate: '2017-07-13'
  },
  {
    id: 43722,
    movieName: 'Movie 93',
    language: 'NA',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 7.3,
    releaseDate: '2002-10-31'
  },
  {
    id: 19614,
    movieName: 'Movie 94',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 2.28,
    releaseDate: '2003-08-24'
  },
  {
    id: 24212,
    movieName: 'Movie 95',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 4,
    releaseDate: '2003-12-22'
  },
  {
    id: 49760,
    movieName: 'Movie 96',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 9.71,
    releaseDate: '2007-11-26'
  },
  {
    id: 72132,
    movieName: 'Movie 97',
    language: 'English',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 6.13,
    releaseDate: '2016-06-19'
  },
  {
    id: 34291,
    movieName: 'Movie 98',
    language: 'English',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 6.21,
    releaseDate: '2008-09-10'
  },
  {
    id: 68564,
    movieName: 'Movie 99',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 4.05,
    releaseDate: '2007-11-18'
  },{
    id: 20337,
    movieName: 'Movie 100',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 2.79,
    releaseDate: '2019-08-04'
  },
  {
    id: 51479,
    movieName: 'Movie 101',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 3.06,
    releaseDate: '2001-04-18'
  },
  {
    id: 46499,
    movieName: 'Movie 102',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 2.22,
    releaseDate: '2020-07-08'
  },
  {
    id: 70330,
    movieName: 'Movie 103',
    language: 'NA',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 8.37,
    releaseDate: '2023-11-15'
  },
  {
    id: 59128,
    movieName: 'Movie 104',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 3.97,
    releaseDate: '2009-05-28'
  },
  {
    id: 66436,
    movieName: 'Movie 105',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 6.81,
    releaseDate: '2017-05-26'
  },
  {
    id: 36625,
    movieName: 'Movie 106',
    language: 'English',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 8.8,
    releaseDate: '2007-07-05'
  },
  {
    id: 62242,
    movieName: 'Movie 107',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 5.72,
    releaseDate: '2000-02-03'
  },
  {
    id: 18198,
    movieName: 'Movie 108',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 7.51,
    releaseDate: '2012-03-07'
  },
  {
    id: 38459,
    movieName: 'Movie 109',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 2.75,
    releaseDate: '2014-04-09'
  },
  {
    id: 72726,
    movieName: 'Movie 110',
    language: 'English',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 2.49,
    releaseDate: '2017-06-15'
  },
  {
    id: 76618,
    movieName: 'Movie 111',
    language: 'English',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 6.28,
    releaseDate: '2016-04-24'
  },
  {
    id: 81764,
    movieName: 'Movie 112',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 6.03,
    releaseDate: '2008-07-09'
  },
  {
    id: 29681,
    movieName: 'Movie 113',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 8.45,
    releaseDate: '2005-02-25'
  },
  {
    id: 19526,
    movieName: 'Movie 114',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 5.39,
    releaseDate: '2009-09-28'
  },
  {
    id: 25320,
    movieName: 'Movie 115',
    language: 'English',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 9.07,
    releaseDate: '2012-04-08'
  },
  {
    id: 37353,
    movieName: 'Movie 116',
    language: 'NA',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 7.49,
    releaseDate: '2023-03-07'
  },
  {
    id: 63629,
    movieName: 'Movie 117',
    language: 'NA',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 7.58,
    releaseDate: '2006-07-08'
  },
  {
    id: 68373,
    movieName: 'Movie 118',
    language: 'NA',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 3.08,
    releaseDate: '2009-11-26'
  },
  {
    id: 36714,
    movieName: 'Movie 119',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 3.73,
    releaseDate: '2015-09-07'
  },
  {
    id: 65106,
    movieName: 'Movie 120',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 4.71,
    releaseDate: '2012-01-04'
  },
  {
    id: 51175,
    movieName: 'Movie 121',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 2.44,
    releaseDate: '2007-04-01'
  },
  {
    id: 81396,
    movieName: 'Movie 122',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 8.56,
    releaseDate: '2012-12-06'
  },
  {
    id: 66462,
    movieName: 'Movie 123',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 3.7,
    releaseDate: '2010-03-13'
  },
  {
    id: 26917,
    movieName: 'Movie 124',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 2.88,
    releaseDate: '2002-04-06'
  },
  {
    id: 43397,
    movieName: 'Movie 125',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 3.36,
    releaseDate: '2012-07-23'
  },
  {
    id: 29184,
    movieName: 'Movie 126',
    language: 'English',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 4.5,
    releaseDate: '2013-06-28'
  },
  {
    id: 29592,
    movieName: 'Movie 127',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 2.88,
    releaseDate: '2012-04-07'
  },
  {
    id: 63923,
    movieName: 'Movie 128',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 3.57,
    releaseDate: '2004-07-09'
  },
  {
    id: 66181,
    movieName: 'Movie 129',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 5.83,
    releaseDate: '2022-02-16'
  },
  {
    id: 44211,
    movieName: 'Movie 130',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 8.69,
    releaseDate: '2005-02-24'
  },
  {
    id: 84295,
    movieName: 'Movie 131',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 2.85,
    releaseDate: '2008-11-09'
  },
  {
    id: 28027,
    movieName: 'Movie 132',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 5.55,
    releaseDate: '2010-01-18'
  },
  {
    id: 24157,
    movieName: 'Movie 133',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 9.91,
    releaseDate: '2011-08-21'
  },
  {
    id: 37602,
    movieName: 'Movie 134',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 2.19,
    releaseDate: '2000-10-06'
  },
  {
    id: 81903,
    movieName: 'Movie 135',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 8.15,
    releaseDate: '2006-10-19'
  },
  {
    id: 54477,
    movieName: 'Movie 136',
    language: 'English',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 9.93,
    releaseDate: '2001-07-13'
  },
  {
    id: 76954,
    movieName: 'Movie 137',
    language: 'NA',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 5.2,
    releaseDate: '2000-12-14'
  },
  {
    id: 20872,
    movieName: 'Movie 138',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 9.32,
    releaseDate: '2002-04-23'
  },
  {
    id: 56361,
    movieName: 'Movie 139',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 1.22,
    releaseDate: '2017-03-24'
  },
  {
    id: 41969,
    movieName: 'Movie 140',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 1.92,
    releaseDate: '2009-01-09'
  },
  {
    id: 32516,
    movieName: 'Movie 141',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 7.09,
    releaseDate: '2001-03-01'
  },
  {
    id: 70570,
    movieName: 'Movie 142',
    language: 'NA',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 1.52,
    releaseDate: '2010-03-15'
  },
  {
    id: 55036,
    movieName: 'Movie 143',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 1.99,
    releaseDate: '2022-04-26'
  },
  {
    id: 68592,
    movieName: 'Movie 144',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 2.66,
    releaseDate: '2009-10-26'
  },
  {
    id: 34901,
    movieName: 'Movie 145',
    language: 'NA',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 4.89,
    releaseDate: '2020-02-09'
  },
  {
    id: 59374,
    movieName: 'Movie 146',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 3.52,
    releaseDate: '2012-02-18'
  },
  {
    id: 82418,
    movieName: 'Movie 147',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 3.33,
    releaseDate: '2020-09-22'
  },
  {
    id: 63038,
    movieName: 'Movie 148',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 7.81,
    releaseDate: '2019-02-08'
  },
  {
    id: 56379,
    movieName: 'Movie 149',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 1.45,
    releaseDate: '2008-01-10'
  },
  {
    id: 80795,
    movieName: 'Movie 150',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 4.43,
    releaseDate: '2021-01-07'
  },
  {
    id: 82870,
    movieName: 'Movie 151',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 3.22,
    releaseDate: '2015-07-23'
  },
  {
    id: 30332,
    movieName: 'Movie 152',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 7.57,
    releaseDate: '2000-08-15'
  },
  {
    id: 47961,
    movieName: 'Movie 153',
    language: 'English',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 8.1,
    releaseDate: '2016-09-20'
  },
  {
    id: 26611,
    movieName: 'Movie 154',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 2.51,
    releaseDate: '2016-03-22'
  },
  {
    id: 79243,
    movieName: 'Movie 155',
    language: 'NA',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 5.04,
    releaseDate: '2006-10-25'
  },
  {
    id: 65473,
    movieName: 'Movie 156',
    language: 'NA',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 1.29,
    releaseDate: '2024-03-07'
  },
  {
    id: 52994,
    movieName: 'Movie 157',
    language: 'English',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 9.98,
    releaseDate: '2001-10-17'
  },
  {
    id: 32246,
    movieName: 'Movie 158',
    language: 'NA',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 9.97,
    releaseDate: '2015-07-24'
  },
  {
    id: 75526,
    movieName: 'Movie 159',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 3.29,
    releaseDate: '2013-05-09'
  },
  {
    id: 65009,
    movieName: 'Movie 160',
    language: 'NA',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 2.47,
    releaseDate: '2007-02-20'
  },
  {
    id: 60837,
    movieName: 'Movie 161',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 8.8,
    releaseDate: '2015-08-13'
  },
  {
    id: 74515,
    movieName: 'Movie 162',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 1.11,
    releaseDate: '2015-09-17'
  },
  {
    id: 44092,
    movieName: 'Movie 163',
    language: 'English',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 7.25,
    releaseDate: '2009-11-22'
  },
  {
    id: 26673,
    movieName: 'Movie 164',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 7.02,
    releaseDate: '2021-09-30'
  },
  {
    id: 28451,
    movieName: 'Movie 165',
    language: 'NA',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 1.99,
    releaseDate: '2018-05-23'
  },
  {
    id: 68890,
    movieName: 'Movie 166',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 8.58,
    releaseDate: '2012-04-24'
  },
  {
    id: 62037,
    movieName: 'Movie 167',
    language: 'NA',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 1.4,
    releaseDate: '2014-07-16'
  },
  {
    id: 56751,
    movieName: 'Movie 168',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 3.82,
    releaseDate: '2018-10-05'
  },
  {
    id: 25571,
    movieName: 'Movie 169',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 7.89,
    releaseDate: '2008-01-07'
  },
  {
    id: 65792,
    movieName: 'Movie 170',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 7.84,
    releaseDate: '2015-12-25'
  },
  {
    id: 69890,
    movieName: 'Movie 171',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 3.97,
    releaseDate: '2009-12-31'
  },
  {
    id: 36530,
    movieName: 'Movie 172',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 4.89,
    releaseDate: '2008-02-04'
  },
  {
    id: 74217,
    movieName: 'Movie 173',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 6.28,
    releaseDate: '2023-10-22'
  },
  {
    id: 66630,
    movieName: 'Movie 174',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 9.12,
    releaseDate: '2023-11-12'
  },
  {
    id: 83288,
    movieName: 'Movie 175',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 5.33,
    releaseDate: '2013-07-06'
  },
  {
    id: 47828,
    movieName: 'Movie 176',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 1.92,
    releaseDate: '2014-09-19'
  },
  {
    id: 71230,
    movieName: 'Movie 177',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 7.66,
    releaseDate: '2022-05-12'
  },
  {
    id: 36634,
    movieName: 'Movie 178',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 2.34,
    releaseDate: '2001-08-07'
  },
  {
    id: 49928,
    movieName: 'Movie 179',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 1.15,
    releaseDate: '2019-12-03'
  },
  {
    id: 24479,
    movieName: 'Movie 180',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 6.06,
    releaseDate: '2015-10-27'
  },
  {
    id: 65052,
    movieName: 'Movie 181',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 1.56,
    releaseDate: '2022-09-16'
  },
  {
    id: 39984,
    movieName: 'Movie 182',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 5.15,
    releaseDate: '2010-12-14'
  },
  {
    id: 37618,
    movieName: 'Movie 183',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 1.18,
    releaseDate: '2017-01-12'
  },
  {
    id: 71346,
    movieName: 'Movie 184',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 5.01,
    releaseDate: '2010-01-21'
  },
  {
    id: 70423,
    movieName: 'Movie 185',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 7.85,
    releaseDate: '2010-07-23'
  },
  {
    id: 33835,
    movieName: 'Movie 186',
    language: 'NA',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 5.48,
    releaseDate: '2023-08-07'
  },
  {
    id: 74789,
    movieName: 'Movie 187',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 4.87,
    releaseDate: '2022-10-30'
  },
  {
    id: 81205,
    movieName: 'Movie 188',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 4.22,
    releaseDate: '2015-05-25'
  },
  {
    id: 58947,
    movieName: 'Movie 189',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 6.36,
    releaseDate: '2011-03-11'
  },
  {
    id: 62061,
    movieName: 'Movie 190',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 4.17,
    releaseDate: '2012-08-27'
  },
  {
    id: 51212,
    movieName: 'Movie 191',
    language: 'English',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 9.93,
    releaseDate: '2006-12-07'
  },
  {
    id: 80255,
    movieName: 'Movie 192',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 8.19,
    releaseDate: '2021-03-02'
  },
  {
    id: 37102,
    movieName: 'Movie 193',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 6.52,
    releaseDate: '2004-05-25'
  },
  {
    id: 45464,
    movieName: 'Movie 194',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 8.29,
    releaseDate: '2002-10-24'
  },
  {
    id: 58027,
    movieName: 'Movie 195',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 2.42,
    releaseDate: '2010-07-29'
  },
  {
    id: 32269,
    movieName: 'Movie 196',
    language: 'NA',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 2.86,
    releaseDate: '2020-08-22'
  },
  {
    id: 38504,
    movieName: 'Movie 197',
    language: 'English',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 9.77,
    releaseDate: '2020-08-30'
  },
  {
    id: 26750,
    movieName: 'Movie 198',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 9.9,
    releaseDate: '2001-02-20'
  },
  {
    id: 76033,
    movieName: 'Movie 199',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 6.65,
    releaseDate: '2017-06-16'
  },{
    id: 56868,
    movieName: 'Movie 200',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 8.33,
    releaseDate: '2019-03-17'
  },
  {
    id: 50090,
    movieName: 'Movie 201',
    language: 'English',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 7.79,
    releaseDate: '2021-10-15'
  },
  {
    id: 70444,
    movieName: 'Movie 202',
    language: 'English',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 6.55,
    releaseDate: '2005-08-08'
  },
  {
    id: 61436,
    movieName: 'Movie 203',
    language: 'NA',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 3.14,
    releaseDate: '2023-11-06'
  },
  {
    id: 39672,
    movieName: 'Movie 204',
    language: 'English',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 5.31,
    releaseDate: '2003-04-29'
  },
  {
    id: 38956,
    movieName: 'Movie 205',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 7.53,
    releaseDate: '2012-03-19'
  },
  {
    id: 17299,
    movieName: 'Movie 206',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 9.32,
    releaseDate: '2002-04-14'
  },
  {
    id: 64804,
    movieName: 'Movie 207',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 6.5,
    releaseDate: '2024-03-09'
  },
  {
    id: 65670,
    movieName: 'Movie 208',
    language: 'English',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 1.47,
    releaseDate: '2010-01-23'
  },
  {
    id: 49737,
    movieName: 'Movie 209',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 5.53,
    releaseDate: '2023-08-31'
  },
  {
    id: 67403,
    movieName: 'Movie 210',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 6.13,
    releaseDate: '2012-11-19'
  },
  {
    id: 25499,
    movieName: 'Movie 211',
    language: 'NA',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 9.22,
    releaseDate: '2008-09-03'
  },
  {
    id: 33264,
    movieName: 'Movie 212',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 8.35,
    releaseDate: '2018-08-16'
  },
  {
    id: 26418,
    movieName: 'Movie 213',
    language: 'NA',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 6.43,
    releaseDate: '2001-05-16'
  },
  {
    id: 49739,
    movieName: 'Movie 214',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 3.78,
    releaseDate: '2012-10-31'
  },
  {
    id: 50759,
    movieName: 'Movie 215',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 5.83,
    releaseDate: '2010-01-05'
  },
  {
    id: 79216,
    movieName: 'Movie 216',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 4.55,
    releaseDate: '2004-07-22'
  },
  {
    id: 68924,
    movieName: 'Movie 217',
    language: 'NA',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 8.84,
    releaseDate: '2013-10-23'
  },
  {
    id: 70061,
    movieName: 'Movie 218',
    language: 'NA',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 2.51,
    releaseDate: '2009-06-08'
  },
  {
    id: 62795,
    movieName: 'Movie 219',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 7.27,
    releaseDate: '2008-05-09'
  },
  {
    id: 43818,
    movieName: 'Movie 220',
    language: 'NA',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 2.23,
    releaseDate: '2000-07-12'
  },
  {
    id: 64450,
    movieName: 'Movie 221',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 8.85,
    releaseDate: '2015-09-15'
  },
  {
    id: 26543,
    movieName: 'Movie 222',
    language: 'English',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 4.9,
    releaseDate: '2003-05-14'
  },
  {
    id: 69085,
    movieName: 'Movie 223',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 6.29,
    releaseDate: '2020-10-28'
  },
  {
    id: 54239,
    movieName: 'Movie 224',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 8.12,
    releaseDate: '2020-08-23'
  },
  {
    id: 36730,
    movieName: 'Movie 225',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 3.75,
    releaseDate: '2003-10-15'
  },
  {
    id: 35262,
    movieName: 'Movie 226',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 7.36,
    releaseDate: '2017-03-10'
  },
  {
    id: 24781,
    movieName: 'Movie 227',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 2.69,
    releaseDate: '2012-11-12'
  },
  {
    id: 60540,
    movieName: 'Movie 228',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 5.39,
    releaseDate: '2008-05-29'
  },
  {
    id: 44697,
    movieName: 'Movie 229',
    language: 'NA',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 7.87,
    releaseDate: '2014-05-23'
  },
  {
    id: 22315,
    movieName: 'Movie 230',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 7.79,
    releaseDate: '2009-05-13'
  },
  {
    id: 43215,
    movieName: 'Movie 231',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 4.43,
    releaseDate: '2006-12-08'
  },
  {
    id: 69886,
    movieName: 'Movie 232',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 7.84,
    releaseDate: '2003-11-26'
  },
  {
    id: 69396,
    movieName: 'Movie 233',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 9.75,
    releaseDate: '2013-01-12'
  },
  {
    id: 28747,
    movieName: 'Movie 234',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 7.96,
    releaseDate: '2016-06-12'
  },
  {
    id: 25901,
    movieName: 'Movie 235',
    language: 'English',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 6.08,
    releaseDate: '2012-06-10'
  },
  {
    id: 66019,
    movieName: 'Movie 236',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 6.63,
    releaseDate: '2022-01-30'
  },
  {
    id: 62714,
    movieName: 'Movie 237',
    language: 'English',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 8.38,
    releaseDate: '2011-03-18'
  },
  {
    id: 51268,
    movieName: 'Movie 238',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 9.4,
    releaseDate: '2018-11-18'
  },
  {
    id: 80086,
    movieName: 'Movie 239',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 9.6,
    releaseDate: '2008-08-30'
  },
  {
    id: 36651,
    movieName: 'Movie 240',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 5.33,
    releaseDate: '2019-06-15'
  },
  {
    id: 33399,
    movieName: 'Movie 241',
    language: 'English',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 6.45,
    releaseDate: '2017-12-24'
  },
  {
    id: 40909,
    movieName: 'Movie 242',
    language: 'NA',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 7.21,
    releaseDate: '2012-08-18'
  },
  {
    id: 59213,
    movieName: 'Movie 243',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 4.69,
    releaseDate: '2009-01-31'
  },
  {
    id: 65170,
    movieName: 'Movie 244',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 7.84,
    releaseDate: '2001-03-18'
  },
  {
    id: 38664,
    movieName: 'Movie 245',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 1.5,
    releaseDate: '2023-04-07'
  },
  {
    id: 48301,
    movieName: 'Movie 246',
    language: 'English',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 9.81,
    releaseDate: '2006-11-02'
  },
  {
    id: 22294,
    movieName: 'Movie 247',
    language: 'English',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 1.55,
    releaseDate: '2008-11-02'
  },
  {
    id: 69848,
    movieName: 'Movie 248',
    language: 'English',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 9.27,
    releaseDate: '2006-08-04'
  },
  {
    id: 17288,
    movieName: 'Movie 249',
    language: 'English',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 8.59,
    releaseDate: '2006-03-09'
  },
  {
    id: 17953,
    movieName: 'Movie 250',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 6.77,
    releaseDate: '2003-01-01'
  },
  {
    id: 55724,
    movieName: 'Movie 251',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 3.26,
    releaseDate: '2018-12-31'
  },
  {
    id: 52443,
    movieName: 'Movie 252',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 8.9,
    releaseDate: '2011-02-05'
  },
  {
    id: 39653,
    movieName: 'Movie 253',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 1.07,
    releaseDate: '2001-10-14'
  },
  {
    id: 30661,
    movieName: 'Movie 254',
    language: 'English',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 3.45,
    releaseDate: '2016-12-05'
  },
  {
    id: 66134,
    movieName: 'Movie 255',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 9.78,
    releaseDate: '2006-09-23'
  },
  {
    id: 55871,
    movieName: 'Movie 256',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 2.04,
    releaseDate: '2016-11-21'
  },
  {
    id: 47706,
    movieName: 'Movie 257',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 8.76,
    releaseDate: '2002-12-08'
  },
  {
    id: 80983,
    movieName: 'Movie 258',
    language: 'English',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 3.52,
    releaseDate: '2008-06-10'
  },
  {
    id: 40508,
    movieName: 'Movie 259',
    language: 'NA',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 8.55,
    releaseDate: '2018-07-21'
  },
  {
    id: 72041,
    movieName: 'Movie 260',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 1.56,
    releaseDate: '2002-11-28'
  },
  {
    id: 51077,
    movieName: 'Movie 261',
    language: 'English',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 3.01,
    releaseDate: '2008-08-18'
  },
  {
    id: 41427,
    movieName: 'Movie 262',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 6.5,
    releaseDate: '2005-02-26'
  },
  {
    id: 65119,
    movieName: 'Movie 263',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 2.2,
    releaseDate: '2007-11-03'
  },
  {
    id: 64717,
    movieName: 'Movie 264',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 7.39,
    releaseDate: '2017-11-13'
  },
  {
    id: 72902,
    movieName: 'Movie 265',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 2.16,
    releaseDate: '2005-12-10'
  },
  {
    id: 67216,
    movieName: 'Movie 266',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 8.29,
    releaseDate: '2017-03-21'
  },
  {
    id: 82908,
    movieName: 'Movie 267',
    language: 'NA',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 2.08,
    releaseDate: '2019-09-18'
  },
  {
    id: 30673,
    movieName: 'Movie 268',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 9.58,
    releaseDate: '2009-06-19'
  },
  {
    id: 60740,
    movieName: 'Movie 269',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 5.29,
    releaseDate: '2015-02-08'
  },
  {
    id: 53559,
    movieName: 'Movie 270',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 1.53,
    releaseDate: '2000-03-30'
  },
  {
    id: 34867,
    movieName: 'Movie 271',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 3.75,
    releaseDate: '2019-04-17'
  },
  {
    id: 67037,
    movieName: 'Movie 272',
    language: 'NA',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 3.33,
    releaseDate: '2015-05-07'
  },
  {
    id: 51387,
    movieName: 'Movie 273',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 5.72,
    releaseDate: '2015-10-30'
  },
  {
    id: 57023,
    movieName: 'Movie 274',
    language: 'NA',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 5.21,
    releaseDate: '2002-10-08'
  },
  {
    id: 39228,
    movieName: 'Movie 275',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 7.83,
    releaseDate: '2024-02-25'
  },
  {
    id: 19157,
    movieName: 'Movie 276',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 4.9,
    releaseDate: '2011-03-16'
  },
  {
    id: 51412,
    movieName: 'Movie 277',
    language: 'English',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 8.06,
    releaseDate: '2014-02-15'
  },
  {
    id: 35712,
    movieName: 'Movie 278',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 7.4,
    releaseDate: '2000-07-29'
  },
  {
    id: 40655,
    movieName: 'Movie 279',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 7.68,
    releaseDate: '2017-03-06'
  },
  {
    id: 38228,
    movieName: 'Movie 280',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 3.77,
    releaseDate: '2021-01-24'
  },
  {
    id: 56923,
    movieName: 'Movie 281',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 6.19,
    releaseDate: '2007-02-07'
  },
  {
    id: 63362,
    movieName: 'Movie 282',
    language: 'English',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 7.36,
    releaseDate: '2017-06-04'
  },
  {
    id: 39047,
    movieName: 'Movie 283',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 8.99,
    releaseDate: '2012-12-06'
  },
  {
    id: 29289,
    movieName: 'Movie 284',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 7.41,
    releaseDate: '2020-02-29'
  },
  {
    id: 50208,
    movieName: 'Movie 285',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 2.86,
    releaseDate: '2009-04-10'
  },
  {
    id: 69797,
    movieName: 'Movie 286',
    language: 'English',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 8.14,
    releaseDate: '2004-03-11'
  },
  {
    id: 78459,
    movieName: 'Movie 287',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 6.53,
    releaseDate: '2015-07-05'
  },
  {
    id: 33549,
    movieName: 'Movie 288',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 7.32,
    releaseDate: '2012-05-12'
  },
  {
    id: 21191,
    movieName: 'Movie 289',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 7.49,
    releaseDate: '2000-08-13'
  },
  {
    id: 32758,
    movieName: 'Movie 290',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 2.7,
    releaseDate: '2019-07-20'
  },
  {
    id: 82047,
    movieName: 'Movie 291',
    language: 'NA',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 6.74,
    releaseDate: '2002-05-04'
  },
  {
    id: 39347,
    movieName: 'Movie 292',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 9.67,
    releaseDate: '2023-12-12'
  },
  {
    id: 27790,
    movieName: 'Movie 293',
    language: 'NA',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 6,
    releaseDate: '2024-02-09'
  },
  {
    id: 43928,
    movieName: 'Movie 294',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 5.08,
    releaseDate: '2005-11-04'
  },
  {
    id: 56399,
    movieName: 'Movie 295',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 1.89,
    releaseDate: '2003-03-30'
  },
  {
    id: 55234,
    movieName: 'Movie 296',
    language: 'NA',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 2.5,
    releaseDate: '2003-07-21'
  },
  {
    id: 30250,
    movieName: 'Movie 297',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 9.02,
    releaseDate: '2002-11-22'
  },
  {
    id: 30979,
    movieName: 'Movie 298',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 9.03,
    releaseDate: '2005-03-13'
  },
  {
    id: 70653,
    movieName: 'Movie 299',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 7.98,
    releaseDate: '2001-07-29'
  },{
    id: 40304,
    movieName: 'Movie 300',
    language: 'English',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 1.81,
    releaseDate: '2019-04-20'
  },
  {
    id: 72456,
    movieName: 'Movie 301',
    language: 'English',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 7.39,
    releaseDate: '2005-08-28'
  },
  {
    id: 28774,
    movieName: 'Movie 302',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 9.12,
    releaseDate: '2017-02-23'
  },
  {
    id: 28142,
    movieName: 'Movie 303',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 3.83,
    releaseDate: '2005-08-07'
  },
  {
    id: 39427,
    movieName: 'Movie 304',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 4.62,
    releaseDate: '2023-11-22'
  },
  {
    id: 27867,
    movieName: 'Movie 305',
    language: 'NA',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 1.24,
    releaseDate: '2009-11-01'
  },
  {
    id: 27576,
    movieName: 'Movie 306',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 8.9,
    releaseDate: '2010-06-25'
  },
  {
    id: 21987,
    movieName: 'Movie 307',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 8.22,
    releaseDate: '2008-09-12'
  },
  {
    id: 22193,
    movieName: 'Movie 308',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 9.05,
    releaseDate: '2014-03-20'
  },
  {
    id: 55875,
    movieName: 'Movie 309',
    language: 'NA',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 1.97,
    releaseDate: '2002-06-16'
  },
  {
    id: 66622,
    movieName: 'Movie 310',
    language: 'NA',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 3.12,
    releaseDate: '2022-05-01'
  },
  {
    id: 76982,
    movieName: 'Movie 311',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 4.38,
    releaseDate: '2010-10-12'
  },
  {
    id: 47927,
    movieName: 'Movie 312',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 2.85,
    releaseDate: '2000-10-28'
  },
  {
    id: 41228,
    movieName: 'Movie 313',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 8.68,
    releaseDate: '2011-09-14'
  },
  {
    id: 23840,
    movieName: 'Movie 314',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 9.9,
    releaseDate: '2002-10-31'
  },
  {
    id: 66695,
    movieName: 'Movie 315',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 9.15,
    releaseDate: '2004-02-02'
  },
  {
    id: 76470,
    movieName: 'Movie 316',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 8.88,
    releaseDate: '2013-11-22'
  },
  {
    id: 74811,
    movieName: 'Movie 317',
    language: 'English',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 8.24,
    releaseDate: '2021-03-07'
  },
  {
    id: 35442,
    movieName: 'Movie 318',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 5.33,
    releaseDate: '2016-02-26'
  },
  {
    id: 45006,
    movieName: 'Movie 319',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 2.32,
    releaseDate: '2021-06-02'
  },
  {
    id: 76508,
    movieName: 'Movie 320',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 2.29,
    releaseDate: '2021-01-28'
  },
  {
    id: 25085,
    movieName: 'Movie 321',
    language: 'NA',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 6.12,
    releaseDate: '2008-05-05'
  },
  {
    id: 44958,
    movieName: 'Movie 322',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 1.04,
    releaseDate: '2011-12-23'
  },
  {
    id: 25777,
    movieName: 'Movie 323',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 9.02,
    releaseDate: '2013-10-06'
  },
  {
    id: 81123,
    movieName: 'Movie 324',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 5.76,
    releaseDate: '2019-05-23'
  },
  {
    id: 63228,
    movieName: 'Movie 325',
    language: 'NA',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 7.88,
    releaseDate: '2022-03-13'
  },
  {
    id: 67313,
    movieName: 'Movie 326',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 8.67,
    releaseDate: '2005-01-11'
  },
  {
    id: 82713,
    movieName: 'Movie 327',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 5.44,
    releaseDate: '2016-06-19'
  },
  {
    id: 22408,
    movieName: 'Movie 328',
    language: 'English',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 8.37,
    releaseDate: '2022-04-11'
  },
  {
    id: 55040,
    movieName: 'Movie 329',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 4.76,
    releaseDate: '2011-09-01'
  },
  {
    id: 31411,
    movieName: 'Movie 330',
    language: 'NA',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 2.7,
    releaseDate: '2009-12-15'
  },
  {
    id: 83909,
    movieName: 'Movie 331',
    language: 'NA',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 9.13,
    releaseDate: '2006-08-29'
  },
  {
    id: 44297,
    movieName: 'Movie 332',
    language: 'NA',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 6.82,
    releaseDate: '2022-08-24'
  },
  {
    id: 73725,
    movieName: 'Movie 333',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 4.41,
    releaseDate: '2004-12-15'
  },
  {
    id: 40460,
    movieName: 'Movie 334',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 5.99,
    releaseDate: '2004-09-15'
  },
  {
    id: 30570,
    movieName: 'Movie 335',
    language: 'NA',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 8.3,
    releaseDate: '2012-09-06'
  },
  {
    id: 29869,
    movieName: 'Movie 336',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 7.86,
    releaseDate: '2009-10-17'
  },
  {
    id: 72033,
    movieName: 'Movie 337',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 5.3,
    releaseDate: '2004-09-27'
  },
  {
    id: 19331,
    movieName: 'Movie 338',
    language: 'English',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 6.33,
    releaseDate: '2012-01-05'
  },
  {
    id: 41206,
    movieName: 'Movie 339',
    language: 'English',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 7.08,
    releaseDate: '2003-09-03'
  },
  {
    id: 16980,
    movieName: 'Movie 340',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 5.85,
    releaseDate: '2020-01-27'
  },
  {
    id: 29802,
    movieName: 'Movie 341',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 1.64,
    releaseDate: '2009-06-06'
  },
  {
    id: 46482,
    movieName: 'Movie 342',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 1.3,
    releaseDate: '2012-08-03'
  },
  {
    id: 62941,
    movieName: 'Movie 343',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 6.94,
    releaseDate: '2005-05-12'
  },
  {
    id: 19937,
    movieName: 'Movie 344',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 5.48,
    releaseDate: '2021-01-20'
  },
  {
    id: 42072,
    movieName: 'Movie 345',
    language: 'NA',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 8.23,
    releaseDate: '2000-04-22'
  },
  {
    id: 56712,
    movieName: 'Movie 346',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 7.27,
    releaseDate: '2009-02-25'
  },
  {
    id: 71724,
    movieName: 'Movie 347',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 4.52,
    releaseDate: '2007-10-04'
  },
  {
    id: 24843,
    movieName: 'Movie 348',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 6.74,
    releaseDate: '2005-05-07'
  },
  {
    id: 39054,
    movieName: 'Movie 349',
    language: 'NA',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 3.56,
    releaseDate: '2007-07-18'
  },
  {
    id: 76106,
    movieName: 'Movie 350',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 2.11,
    releaseDate: '2016-11-22'
  },
  {
    id: 40969,
    movieName: 'Movie 351',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 8.78,
    releaseDate: '2021-10-08'
  },
  {
    id: 19324,
    movieName: 'Movie 352',
    language: 'NA',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 1.93,
    releaseDate: '2019-01-04'
  },
  {
    id: 16479,
    movieName: 'Movie 353',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 3.49,
    releaseDate: '2006-12-08'
  },
  {
    id: 31122,
    movieName: 'Movie 354',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 7.05,
    releaseDate: '2013-07-11'
  },
  {
    id: 42128,
    movieName: 'Movie 355',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 5.29,
    releaseDate: '2021-11-18'
  },
  {
    id: 72233,
    movieName: 'Movie 356',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 2.82,
    releaseDate: '2002-04-27'
  },
  {
    id: 58524,
    movieName: 'Movie 357',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 5.93,
    releaseDate: '2003-04-02'
  },
  {
    id: 54720,
    movieName: 'Movie 358',
    language: 'NA',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 3.64,
    releaseDate: '2016-09-29'
  },
  {
    id: 24711,
    movieName: 'Movie 359',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 1.45,
    releaseDate: '2015-02-01'
  },
  {
    id: 16238,
    movieName: 'Movie 360',
    language: 'English',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 2.7,
    releaseDate: '2023-05-20'
  },
  {
    id: 40828,
    movieName: 'Movie 361',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 6.85,
    releaseDate: '2014-12-03'
  },
  {
    id: 49086,
    movieName: 'Movie 362',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 1.72,
    releaseDate: '2021-07-28'
  },
  {
    id: 56536,
    movieName: 'Movie 363',
    language: 'NA',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 8.03,
    releaseDate: '2014-11-14'
  },
  {
    id: 83854,
    movieName: 'Movie 364',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 1.8,
    releaseDate: '2015-01-07'
  },
  {
    id: 37157,
    movieName: 'Movie 365',
    language: 'NA',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 8.29,
    releaseDate: '2018-02-10'
  },
  {
    id: 65580,
    movieName: 'Movie 366',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 3.78,
    releaseDate: '2000-02-22'
  },
  {
    id: 20943,
    movieName: 'Movie 367',
    language: 'English',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 1.84,
    releaseDate: '2009-01-04'
  },
  {
    id: 29054,
    movieName: 'Movie 368',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 8.37,
    releaseDate: '2010-12-07'
  },
  {
    id: 80867,
    movieName: 'Movie 369',
    language: 'English',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 4.87,
    releaseDate: '2000-07-27'
  },
  {
    id: 84305,
    movieName: 'Movie 370',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 9.66,
    releaseDate: '2011-01-24'
  },
  {
    id: 72774,
    movieName: 'Movie 371',
    language: 'English',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 2.71,
    releaseDate: '2018-03-23'
  },
  {
    id: 22908,
    movieName: 'Movie 372',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 8.55,
    releaseDate: '2017-09-19'
  },
  {
    id: 53205,
    movieName: 'Movie 373',
    language: 'English',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 6.77,
    releaseDate: '2018-03-17'
  },
  {
    id: 83359,
    movieName: 'Movie 374',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 9.33,
    releaseDate: '2006-12-28'
  },
  {
    id: 72210,
    movieName: 'Movie 375',
    language: 'NA',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 2.64,
    releaseDate: '2008-08-24'
  },
  {
    id: 40096,
    movieName: 'Movie 376',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 6.72,
    releaseDate: '2011-10-16'
  },
  {
    id: 42740,
    movieName: 'Movie 377',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 5.95,
    releaseDate: '2016-07-07'
  },
  {
    id: 52062,
    movieName: 'Movie 378',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 5.2,
    releaseDate: '2007-02-10'
  },
  {
    id: 27763,
    movieName: 'Movie 379',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 3.13,
    releaseDate: '2003-04-29'
  },
  {
    id: 54392,
    movieName: 'Movie 380',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 7.54,
    releaseDate: '2019-12-30'
  },
  {
    id: 48113,
    movieName: 'Movie 381',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 6.78,
    releaseDate: '2003-11-18'
  },
  {
    id: 23392,
    movieName: 'Movie 382',
    language: 'NA',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 9.07,
    releaseDate: '2023-03-03'
  },
  {
    id: 32467,
    movieName: 'Movie 383',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 8.08,
    releaseDate: '2022-04-20'
  },
  {
    id: 23203,
    movieName: 'Movie 384',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 2.4,
    releaseDate: '2005-07-05'
  },
  {
    id: 74516,
    movieName: 'Movie 385',
    language: 'English',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 6.19,
    releaseDate: '2007-01-04'
  },
  {
    id: 71424,
    movieName: 'Movie 386',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 6.17,
    releaseDate: '2011-03-10'
  },
  {
    id: 35233,
    movieName: 'Movie 387',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 1.88,
    releaseDate: '2016-02-13'
  },
  {
    id: 68796,
    movieName: 'Movie 388',
    language: 'NA',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 6.68,
    releaseDate: '2011-11-02'
  },
  {
    id: 43089,
    movieName: 'Movie 389',
    language: 'NA',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 6.56,
    releaseDate: '2019-01-18'
  },
  {
    id: 43336,
    movieName: 'Movie 390',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 5.13,
    releaseDate: '2023-02-20'
  },
  {
    id: 50596,
    movieName: 'Movie 391',
    language: 'NA',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 9.27,
    releaseDate: '2012-12-11'
  },
  {
    id: 80544,
    movieName: 'Movie 392',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 3.25,
    releaseDate: '2013-03-28'
  },
  {
    id: 58055,
    movieName: 'Movie 393',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 9.54,
    releaseDate: '2008-10-15'
  },
  {
    id: 31038,
    movieName: 'Movie 394',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 2.54,
    releaseDate: '2003-01-09'
  },
  {
    id: 72184,
    movieName: 'Movie 395',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 4.4,
    releaseDate: '2013-08-17'
  },
  {
    id: 84020,
    movieName: 'Movie 396',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 9.77,
    releaseDate: '2015-10-14'
  },
  {
    id: 22562,
    movieName: 'Movie 397',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 5.6,
    releaseDate: '2023-03-18'
  },
  {
    id: 26262,
    movieName: 'Movie 398',
    language: 'NA',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 6.5,
    releaseDate: '2023-08-28'
  },
  {
    id: 50924,
    movieName: 'Movie 399',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 4.49,
    releaseDate: '2021-05-24'
  },{
    id: 30284,
    movieName: 'Movie 401',
    language: 'English',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 1.24,
    releaseDate: '2009-09-14'
  },
  {
    id: 58670,
    movieName: 'Movie 402',
    language: 'English',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 6.66,
    releaseDate: '2004-04-29'
  },
  {
    id: 50934,
    movieName: 'Movie 403',
    language: 'English',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 9,
    releaseDate: '2017-07-20'
  },
  {
    id: 32056,
    movieName: 'Movie 404',
    language: 'NA',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 2.49,
    releaseDate: '2022-01-26'
  },
  {
    id: 69118,
    movieName: 'Movie 405',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 2.26,
    releaseDate: '2021-09-03'
  },
  {
    id: 63145,
    movieName: 'Movie 406',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 2.24,
    releaseDate: '2018-02-14'
  },
  {
    id: 76227,
    movieName: 'Movie 407',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 4.62,
    releaseDate: '2002-08-05'
  },
  {
    id: 46395,
    movieName: 'Movie 408',
    language: 'NA',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 4.83,
    releaseDate: '2015-02-15'
  },
  {
    id: 60746,
    movieName: 'Movie 409',
    language: 'NA',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 9.64,
    releaseDate: '2015-11-29'
  },
  {
    id: 81914,
    movieName: 'Movie 410',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 7.37,
    releaseDate: '2009-01-12'
  },
  {
    id: 30057,
    movieName: 'Movie 411',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 7.83,
    releaseDate: '2000-06-29'
  },
  {
    id: 49243,
    movieName: 'Movie 412',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 8.66,
    releaseDate: '2002-12-08'
  },
  {
    id: 20285,
    movieName: 'Movie 413',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 2.9,
    releaseDate: '2018-06-04'
  },
  {
    id: 63556,
    movieName: 'Movie 414',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 4.24,
    releaseDate: '2020-03-10'
  },
  {
    id: 20810,
    movieName: 'Movie 415',
    language: 'NA',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 2.87,
    releaseDate: '2012-08-05'
  },
  {
    id: 67265,
    movieName: 'Movie 416',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 9.5,
    releaseDate: '2015-04-22'
  },
  {
    id: 71271,
    movieName: 'Movie 417',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 4.26,
    releaseDate: '2010-03-15'
  },
  {
    id: 38929,
    movieName: 'Movie 418',
    language: 'NA',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 9.41,
    releaseDate: '2019-10-19'
  },
  {
    id: 28723,
    movieName: 'Movie 419',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 7.38,
    releaseDate: '2015-06-19'
  },
  {
    id: 20560,
    movieName: 'Movie 420',
    language: 'English',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 2.28,
    releaseDate: '2012-08-15'
  },
  {
    id: 20856,
    movieName: 'Movie 421',
    language: 'NA',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 1.55,
    releaseDate: '2011-05-10'
  },
  {
    id: 63989,
    movieName: 'Movie 422',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 3.61,
    releaseDate: '2020-06-08'
  },
  {
    id: 57403,
    movieName: 'Movie 423',
    language: 'NA',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 3.36,
    releaseDate: '2021-09-05'
  },
  {
    id: 57493,
    movieName: 'Movie 424',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 4.56,
    releaseDate: '2023-03-06'
  },
  {
    id: 52255,
    movieName: 'Movie 425',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 6.73,
    releaseDate: '2013-05-27'
  },
  {
    id: 28815,
    movieName: 'Movie 426',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 7.33,
    releaseDate: '2000-04-19'
  },
  {
    id: 34470,
    movieName: 'Movie 427',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 9.65,
    releaseDate: '2006-06-27'
  },
  {
    id: 38440,
    movieName: 'Movie 428',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 4.95,
    releaseDate: '2021-02-23'
  },
  {
    id: 52265,
    movieName: 'Movie 429',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 1.16,
    releaseDate: '2018-07-06'
  },
  {
    id: 57315,
    movieName: 'Movie 430',
    language: 'English',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 1.38,
    releaseDate: '2004-05-26'
  },
  {
    id: 39734,
    movieName: 'Movie 431',
    language: 'English',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 4.66,
    releaseDate: '2003-05-07'
  },
  {
    id: 83617,
    movieName: 'Movie 432',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 8.84,
    releaseDate: '2012-06-28'
  },
  {
    id: 70374,
    movieName: 'Movie 433',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 8.67,
    releaseDate: '2013-01-15'
  },
  {
    id: 19421,
    movieName: 'Movie 434',
    language: 'NA',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 8.93,
    releaseDate: '2008-05-02'
  },
  {
    id: 52089,
    movieName: 'Movie 435',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 8.22,
    releaseDate: '2008-11-28'
  },
  {
    id: 69129,
    movieName: 'Movie 436',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 6.1,
    releaseDate: '2016-03-11'
  },
  {
    id: 43633,
    movieName: 'Movie 437',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 2.87,
    releaseDate: '2012-09-12'
  },
  {
    id: 62347,
    movieName: 'Movie 438',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 9.54,
    releaseDate: '2017-04-28'
  },
  {
    id: 24453,
    movieName: 'Movie 439',
    language: 'NA',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 1.24,
    releaseDate: '2003-12-09'
  },
  {
    id: 63185,
    movieName: 'Movie 440',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 7.7,
    releaseDate: '2022-05-26'
  },
  {
    id: 66404,
    movieName: 'Movie 441',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 7.08,
    releaseDate: '2019-08-31'
  },
  {
    id: 30216,
    movieName: 'Movie 442',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 1.28,
    releaseDate: '2005-08-28'
  },
  {
    id: 50049,
    movieName: 'Movie 443',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 6.37,
    releaseDate: '2003-03-19'
  },
  {
    id: 60513,
    movieName: 'Movie 444',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 4.04,
    releaseDate: '2007-06-06'
  },
  {
    id: 58355,
    movieName: 'Movie 445',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 4.22,
    releaseDate: '2016-06-24'
  },
  {
    id: 26462,
    movieName: 'Movie 446',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 9.15,
    releaseDate: '2000-05-21'
  },
  {
    id: 50277,
    movieName: 'Movie 447',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 6.83,
    releaseDate: '2024-02-28'
  },
  {
    id: 22145,
    movieName: 'Movie 448',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 2.51,
    releaseDate: '2010-04-11'
  },
  {
    id: 80337,
    movieName: 'Movie 449',
    language: 'NA',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 1.38,
    releaseDate: '2019-08-02'
  },
  {
    id: 43258,
    movieName: 'Movie 450',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 2.5,
    releaseDate: '2023-11-16'
  },
  {
    id: 55442,
    movieName: 'Movie 451',
    language: 'English',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 5.56,
    releaseDate: '2005-09-23'
  },
  {
    id: 53877,
    movieName: 'Movie 452',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 7.17,
    releaseDate: '2018-01-29'
  },
  {
    id: 43815,
    movieName: 'Movie 453',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 9.35,
    releaseDate: '2019-05-17'
  },
  {
    id: 56320,
    movieName: 'Movie 454',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 8.09,
    releaseDate: '2020-10-26'
  },
  {
    id: 65250,
    movieName: 'Movie 455',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 4.37,
    releaseDate: '2010-03-04'
  },
  {
    id: 82456,
    movieName: 'Movie 456',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 5.79,
    releaseDate: '2015-09-11'
  },
  {
    id: 48932,
    movieName: 'Movie 457',
    language: 'English',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 2.01,
    releaseDate: '2012-01-19'
  },
  {
    id: 42788,
    movieName: 'Movie 458',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 1.45,
    releaseDate: '2008-01-28'
  },
  {
    id: 53044,
    movieName: 'Movie 459',
    language: 'English',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 7.79,
    releaseDate: '2012-03-28'
  },
  {
    id: 41736,
    movieName: 'Movie 460',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 9.53,
    releaseDate: '2014-06-03'
  },
  {
    id: 62810,
    movieName: 'Movie 461',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 4.46,
    releaseDate: '2022-12-22'
  },
  {
    id: 55498,
    movieName: 'Movie 462',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 4.81,
    releaseDate: '2019-04-26'
  },
  {
    id: 82925,
    movieName: 'Movie 463',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 5.99,
    releaseDate: '2005-02-14'
  },
  {
    id: 27434,
    movieName: 'Movie 464',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 9.34,
    releaseDate: '2020-12-30'
  },
  {
    id: 22229,
    movieName: 'Movie 465',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 3.74,
    releaseDate: '2011-04-14'
  },
  {
    id: 24273,
    movieName: 'Movie 466',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 2.84,
    releaseDate: '2019-11-22'
  },
  {
    id: 35165,
    movieName: 'Movie 467',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 1.25,
    releaseDate: '2012-09-13'
  },
  {
    id: 59836,
    movieName: 'Movie 468',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 8.68,
    releaseDate: '2018-07-03'
  },
  {
    id: 38990,
    movieName: 'Movie 469',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 2.68,
    releaseDate: '2004-03-04'
  },
  {
    id: 56153,
    movieName: 'Movie 470',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 8.42,
    releaseDate: '2020-07-05'
  },
  {
    id: 72544,
    movieName: 'Movie 471',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 7.7,
    releaseDate: '2020-09-28'
  },
  {
    id: 58632,
    movieName: 'Movie 472',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 4.53,
    releaseDate: '2009-01-14'
  },
  {
    id: 24842,
    movieName: 'Movie 473',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 6.37,
    releaseDate: '2022-05-17'
  },
  {
    id: 70248,
    movieName: 'Movie 474',
    language: 'English',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 9.95,
    releaseDate: '2018-03-11'
  },
  {
    id: 17911,
    movieName: 'Movie 475',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 8.22,
    releaseDate: '2021-10-21'
  },
  {
    id: 54949,
    movieName: 'Movie 476',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 5.76,
    releaseDate: '2000-06-27'
  },
  {
    id: 69192,
    movieName: 'Movie 477',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 2.45,
    releaseDate: '2020-08-02'
  },
  {
    id: 31063,
    movieName: 'Movie 478',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 4.98,
    releaseDate: '2015-08-30'
  },
  {
    id: 61891,
    movieName: 'Movie 479',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 9.97,
    releaseDate: '2020-04-30'
  },
  {
    id: 84737,
    movieName: 'Movie 480',
    language: 'NA',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 4.83,
    releaseDate: '2019-02-01'
  },
  {
    id: 75899,
    movieName: 'Movie 481',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 2.22,
    releaseDate: '2005-05-26'
  },
  {
    id: 20010,
    movieName: 'Movie 482',
    language: 'English',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 1.6,
    releaseDate: '2015-07-29'
  },
  {
    id: 53209,
    movieName: 'Movie 483',
    language: 'English',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 2,
    releaseDate: '2000-09-27'
  },
  {
    id: 40402,
    movieName: 'Movie 484',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 1.47,
    releaseDate: '2021-06-17'
  },
  {
    id: 24268,
    movieName: 'Movie 485',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 3.33,
    releaseDate: '2020-11-29'
  },
  {
    id: 46046,
    movieName: 'Movie 486',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 4.6,
    releaseDate: '2014-11-27'
  },
  {
    id: 46679,
    movieName: 'Movie 487',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 7.99,
    releaseDate: '2023-05-16'
  },
  {
    id: 34160,
    movieName: 'Movie 488',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 4.98,
    releaseDate: '2022-06-27'
  },
  {
    id: 61673,
    movieName: 'Movie 489',
    language: 'NA',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 6.02,
    releaseDate: '2012-10-31'
  },
  {
    id: 22799,
    movieName: 'Movie 490',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 8.79,
    releaseDate: '2000-11-04'
  },
  {
    id: 46708,
    movieName: 'Movie 491',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 7.73,
    releaseDate: '2008-03-07'
  },
  {
    id: 52305,
    movieName: 'Movie 492',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 1.89,
    releaseDate: '2014-06-05'
  },
  {
    id: 36416,
    movieName: 'Movie 493',
    language: 'English',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 3.34,
    releaseDate: '2012-05-04'
  },
  {
    id: 27023,
    movieName: 'Movie 494',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 3.07,
    releaseDate: '2016-12-02'
  },
  {
    id: 66170,
    movieName: 'Movie 495',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 3.16,
    releaseDate: '2000-06-30'
  },
  {
    id: 24968,
    movieName: 'Movie 496',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 7.06,
    releaseDate: '2022-01-22'
  },
  {
    id: 60957,
    movieName: 'Movie 497',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 6.21,
    releaseDate: '2000-07-30'
  },
  {
    id: 79879,
    movieName: 'Movie 498',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 9.79,
    releaseDate: '2012-04-26'
  },
  {
    id: 49974,
    movieName: 'Movie 499',
    language: 'English',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 6.14,
    releaseDate: '2004-10-25'
  },{
    id: 57758,
    movieName: 'Movie 500',
    language: 'English',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 1.07,
    releaseDate: '2013-12-09'
  },
  {
    id: 74676,
    movieName: 'Movie 501',
    language: 'NA',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 9.91,
    releaseDate: '2003-07-18'
  },
  {
    id: 18469,
    movieName: 'Movie 502',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 2.84,
    releaseDate: '2010-06-01'
  },
  {
    id: 84360,
    movieName: 'Movie 503',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 2.96,
    releaseDate: '2008-06-23'
  },
  {
    id: 74656,
    movieName: 'Movie 504',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 4.08,
    releaseDate: '2001-08-31'
  },
  {
    id: 30744,
    movieName: 'Movie 505',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 8.51,
    releaseDate: '2012-08-15'
  },
  {
    id: 35479,
    movieName: 'Movie 506',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 1.19,
    releaseDate: '2016-08-24'
  },
  {
    id: 63765,
    movieName: 'Movie 507',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 1.94,
    releaseDate: '2000-03-31'
  },
  {
    id: 36371,
    movieName: 'Movie 508',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 7.14,
    releaseDate: '2021-06-25'
  },
  {
    id: 78139,
    movieName: 'Movie 509',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 2.1,
    releaseDate: '2019-07-02'
  },
  {
    id: 41290,
    movieName: 'Movie 510',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 3.57,
    releaseDate: '2016-03-31'
  },
  {
    id: 47895,
    movieName: 'Movie 511',
    language: 'English',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 9.69,
    releaseDate: '2012-07-21'
  },
  {
    id: 47459,
    movieName: 'Movie 512',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 6.63,
    releaseDate: '2005-10-31'
  },
  {
    id: 22499,
    movieName: 'Movie 513',
    language: 'NA',
    noOfActors: 2,
    genre: 'Sci-Fi',
    imdbRating: 6.45,
    releaseDate: '2002-05-16'
  },
  {
    id: 59336,
    movieName: 'Movie 514',
    language: 'English',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 6.97,
    releaseDate: '2013-07-01'
  },
  {
    id: 65582,
    movieName: 'Movie 515',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 8.18,
    releaseDate: '2019-10-03'
  },
  {
    id: 63771,
    movieName: 'Movie 516',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 6.6,
    releaseDate: '2013-07-05'
  },
  {
    id: 25355,
    movieName: 'Movie 517',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 4.12,
    releaseDate: '2023-05-20'
  },
  {
    id: 45919,
    movieName: 'Movie 518',
    language: 'English',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 3.2,
    releaseDate: '2006-02-18'
  },
  {
    id: 69687,
    movieName: 'Movie 519',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 8.42,
    releaseDate: '2014-04-13'
  },
  {
    id: 84728,
    movieName: 'Movie 520',
    language: 'English',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 5.81,
    releaseDate: '2009-01-05'
  },
  {
    id: 37592,
    movieName: 'Movie 521',
    language: 'English',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 4.15,
    releaseDate: '2009-12-31'
  },
  {
    id: 44602,
    movieName: 'Movie 522',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 9.17,
    releaseDate: '2007-04-04'
  },
  {
    id: 73153,
    movieName: 'Movie 523',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 7.88,
    releaseDate: '2002-05-28'
  },
  {
    id: 28140,
    movieName: 'Movie 524',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 1.15,
    releaseDate: '2013-10-27'
  },
  {
    id: 54332,
    movieName: 'Movie 525',
    language: 'English',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 7.29,
    releaseDate: '2002-09-09'
  },
  {
    id: 64274,
    movieName: 'Movie 526',
    language: 'English',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 5.86,
    releaseDate: '2010-11-01'
  },
  {
    id: 62856,
    movieName: 'Movie 527',
    language: 'English',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 1,
    releaseDate: '2004-07-28'
  },
  {
    id: 68434,
    movieName: 'Movie 528',
    language: 'NA',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 4.63,
    releaseDate: '2006-09-18'
  },
  {
    id: 24757,
    movieName: 'Movie 529',
    language: 'English',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 2.29,
    releaseDate: '2015-08-20'
  },
  {
    id: 81248,
    movieName: 'Movie 530',
    language: 'NA',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 3.65,
    releaseDate: '2005-01-25'
  },
  {
    id: 83517,
    movieName: 'Movie 531',
    language: 'English',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 9.36,
    releaseDate: '2006-06-05'
  },
  {
    id: 83599,
    movieName: 'Movie 532',
    language: 'English',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 6.13,
    releaseDate: '2016-01-09'
  },
  {
    id: 80957,
    movieName: 'Movie 533',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 8.03,
    releaseDate: '2006-11-18'
  },
  {
    id: 15832,
    movieName: 'Movie 534',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 9.65,
    releaseDate: '2000-08-25'
  },
  {
    id: 66605,
    movieName: 'Movie 535',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 2.38,
    releaseDate: '2010-02-15'
  },
  {
    id: 20836,
    movieName: 'Movie 536',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 2.09,
    releaseDate: '2023-11-30'
  },
  {
    id: 16330,
    movieName: 'Movie 537',
    language: 'English',
    noOfActors: 4,
    genre: 'Thriller',
    imdbRating: 6.11,
    releaseDate: '2006-12-24'
  },
  {
    id: 46683,
    movieName: 'Movie 538',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 9.71,
    releaseDate: '2018-07-30'
  },
  {
    id: 44874,
    movieName: 'Movie 539',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 5.43,
    releaseDate: '2019-01-16'
  },
  {
    id: 41643,
    movieName: 'Movie 540',
    language: 'NA',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 1.84,
    releaseDate: '2021-05-20'
  },
  {
    id: 24137,
    movieName: 'Movie 541',
    language: 'NA',
    noOfActors: 2,
    genre: 'Comedy',
    imdbRating: 9.77,
    releaseDate: '2014-12-14'
  },
  {
    id: 20210,
    movieName: 'Movie 542',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 5,
    releaseDate: '2005-05-16'
  },
  {
    id: 71332,
    movieName: 'Movie 543',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 6.44,
    releaseDate: '2013-05-08'
  },
  {
    id: 47828,
    movieName: 'Movie 544',
    language: 'English',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 5.97,
    releaseDate: '2014-10-29'
  },
  {
    id: 58561,
    movieName: 'Movie 545',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 5.71,
    releaseDate: '2019-04-15'
  },
  {
    id: 77424,
    movieName: 'Movie 546',
    language: 'Marathi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 8.44,
    releaseDate: '2019-01-13'
  },
  {
    id: 59356,
    movieName: 'Movie 547',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 8.85,
    releaseDate: '2010-09-06'
  },
  {
    id: 60320,
    movieName: 'Movie 548',
    language: 'English',
    noOfActors: 3,
    genre: 'Action',
    imdbRating: 1.34,
    releaseDate: '2010-06-23'
  },
  {
    id: 53515,
    movieName: 'Movie 549',
    language: 'Marathi',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 7.34,
    releaseDate: '2008-11-28'
  },
  {
    id: 23328,
    movieName: 'Movie 550',
    language: 'NA',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 6.32,
    releaseDate: '2004-12-06'
  },
  {
    id: 40831,
    movieName: 'Movie 551',
    language: 'NA',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 3,
    releaseDate: '2018-10-31'
  },
  {
    id: 64206,
    movieName: 'Movie 552',
    language: 'English',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 1.46,
    releaseDate: '2018-05-20'
  },
  {
    id: 31329,
    movieName: 'Movie 553',
    language: 'English',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 3.58,
    releaseDate: '2009-10-22'
  },
  {
    id: 61030,
    movieName: 'Movie 554',
    language: 'English',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 6.65,
    releaseDate: '2004-05-31'
  },
  {
    id: 71837,
    movieName: 'Movie 555',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Horror',
    imdbRating: 3.12,
    releaseDate: '2023-10-30'
  },
  {
    id: 61764,
    movieName: 'Movie 556',
    language: 'NA',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 2.59,
    releaseDate: '2003-06-21'
  },
  {
    id: 45126,
    movieName: 'Movie 557',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 4.04,
    releaseDate: '2021-08-23'
  },
  {
    id: 54445,
    movieName: 'Movie 558',
    language: 'NA',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 4.8,
    releaseDate: '2011-10-13'
  },
  {
    id: 61924,
    movieName: 'Movie 559',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 6.87,
    releaseDate: '2011-05-22'
  },
  {
    id: 75409,
    movieName: 'Movie 560',
    language: 'NA',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 1.97,
    releaseDate: '2020-07-15'
  },
  {
    id: 73777,
    movieName: 'Movie 561',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 2.79,
    releaseDate: '2014-09-03'
  },
  {
    id: 30253,
    movieName: 'Movie 562',
    language: 'English',
    noOfActors: 3,
    genre: 'Comedy',
    imdbRating: 4.02,
    releaseDate: '2009-06-18'
  },
  {
    id: 33318,
    movieName: 'Movie 563',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 4.41,
    releaseDate: '2009-09-16'
  },
  {
    id: 63391,
    movieName: 'Movie 564',
    language: 'English',
    noOfActors: 4,
    genre: 'Action',
    imdbRating: 9.51,
    releaseDate: '2010-05-26'
  },
  {
    id: 40266,
    movieName: 'Movie 565',
    language: 'English',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 1.22,
    releaseDate: '2004-05-09'
  },
  {
    id: 80396,
    movieName: 'Movie 566',
    language: 'English',
    noOfActors: 3,
    genre: 'Romance',
    imdbRating: 3.64,
    releaseDate: '2020-09-27'
  },
  {
    id: 44939,
    movieName: 'Movie 567',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 6.75,
    releaseDate: '2021-09-16'
  },
  {
    id: 46950,
    movieName: 'Movie 568',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 7.32,
    releaseDate: '2021-09-20'
  },
  {
    id: 73098,
    movieName: 'Movie 569',
    language: 'English',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 9.92,
    releaseDate: '2023-07-18'
  },
  {
    id: 23212,
    movieName: 'Movie 570',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 2.22,
    releaseDate: '2022-10-29'
  },
  {
    id: 65219,
    movieName: 'Movie 571',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 5.36,
    releaseDate: '2001-03-22'
  },
  {
    id: 84455,
    movieName: 'Movie 572',
    language: 'NA',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 8.02,
    releaseDate: '2010-02-22'
  },
  {
    id: 20333,
    movieName: 'Movie 573',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 5.36,
    releaseDate: '2023-08-21'
  },
  {
    id: 55477,
    movieName: 'Movie 574',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Comedy',
    imdbRating: 3.05,
    releaseDate: '2012-06-23'
  },
  {
    id: 40918,
    movieName: 'Movie 575',
    language: 'English',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 7.92,
    releaseDate: '2018-05-19'
  },
  {
    id: 82725,
    movieName: 'Movie 576',
    language: 'Hindi',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 9.14,
    releaseDate: '2010-01-05'
  },
  {
    id: 53496,
    movieName: 'Movie 577',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Sci-Fi',
    imdbRating: 9.15,
    releaseDate: '2011-03-07'
  },
  {
    id: 69657,
    movieName: 'Movie 578',
    language: 'Korean',
    noOfActors: 4,
    genre: 'Adventure',
    imdbRating: 4.7,
    releaseDate: '2015-03-06'
  },
  {
    id: 32124,
    movieName: 'Movie 579',
    language: 'NA',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 5.2,
    releaseDate: '2013-10-19'
  },
  {
    id: 52104,
    movieName: 'Movie 580',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Thriller',
    imdbRating: 8.43,
    releaseDate: '2010-06-30'
  },
  {
    id: 80277,
    movieName: 'Movie 581',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 9.11,
    releaseDate: '2019-08-20'
  },
  {
    id: 18076,
    movieName: 'Movie 582',
    language: 'Korean',
    noOfActors: 2,
    genre: 'Drama',
    imdbRating: 4.9,
    releaseDate: '2010-10-06'
  },
  {
    id: 23411,
    movieName: 'Movie 583',
    language: 'English',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 5.55,
    releaseDate: '2000-05-01'
  },
  {
    id: 50284,
    movieName: 'Movie 584',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 5.58,
    releaseDate: '2001-11-26'
  },
  {
    id: 55121,
    movieName: 'Movie 585',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 5,
    releaseDate: '2015-08-03'
  },
  {
    id: 42064,
    movieName: 'Movie 586',
    language: 'Japanese',
    noOfActors: 2,
    genre: 'Action',
    imdbRating: 4.29,
    releaseDate: '2022-09-10'
  },
  {
    id: 53459,
    movieName: 'Movie 587',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Horror',
    imdbRating: 8.75,
    releaseDate: '2018-10-22'
  },
  {
    id: 56216,
    movieName: 'Movie 588',
    language: 'English',
    noOfActors: 3,
    genre: 'Thriller',
    imdbRating: 7.34,
    releaseDate: '2005-02-16'
  },
  {
    id: 59554,
    movieName: 'Movie 589',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 9.66,
    releaseDate: '2012-01-10'
  },
  {
    id: 20959,
    movieName: 'Movie 590',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 8.12,
    releaseDate: '2015-11-16'
  },
  {
    id: 24285,
    movieName: 'Movie 591',
    language: 'Hindi',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 7.21,
    releaseDate: '2022-05-10'
  },
  {
    id: 78920,
    movieName: 'Movie 592',
    language: 'Japanese',
    noOfActors: 4,
    genre: 'Romance',
    imdbRating: 3.57,
    releaseDate: '2020-05-23'
  },
  {
    id: 74481,
    movieName: 'Movie 593',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Adventure',
    imdbRating: 2.97,
    releaseDate: '2016-11-19'
  },
  {
    id: 78806,
    movieName: 'Movie 594',
    language: 'Japanese',
    noOfActors: 3,
    genre: 'Drama',
    imdbRating: 4.56,
    releaseDate: '2017-12-06'
  },
  {
    id: 30822,
    movieName: 'Movie 595',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Sci-Fi',
    imdbRating: 5.71,
    releaseDate: '2014-05-18'
  },
  {
    id: 26057,
    movieName: 'Movie 596',
    language: 'Korean',
    noOfActors: 3,
    genre: 'Adventure',
    imdbRating: 7.67,
    releaseDate: '2022-09-07'
  },
  {
    id: 66578,
    movieName: 'Movie 597',
    language: 'English',
    noOfActors: 3,
    genre: 'Horror',
    imdbRating: 8.49,
    releaseDate: '2011-12-11'
  },
  {
    id: 47016,
    movieName: 'Movie 598',
    language: 'Marathi',
    noOfActors: 4,
    genre: 'Drama',
    imdbRating: 9.44,
    releaseDate: '2011-01-09'
  },
  {
    id: 49500,
    movieName: 'Movie 599',
    language: 'Hindi',
    noOfActors: 2,
    genre: 'Romance',
    imdbRating: 5.18,
    releaseDate: '2011-04-01'
  }]

export const MENU_ITEMS = [{
  id: "1",
  menuItem: "Edit"
},{
  id: "2",
  menuItem: "Delete"
},{
  id: "3",
  menuItem: "Clone"
},{
  id: "4",
  menuItem: "Publish"
},{
  id: "5",
  menuItem: "Unpublish"
},{
  id: "6",
  menuItem: "Add to Release"
}
]

export const fetchFilterData = (colName: string) => Array.from(new Set(ROW_DATA.map((d: any) => d[colName]))).map((d2: string) => ({
    id: d2,
    menuItem: d2
}));

export const MAX_PAGES = ROW_DATA.length;