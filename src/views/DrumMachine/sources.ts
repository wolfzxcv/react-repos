const sources: ISources[] = [
  {
    label: 'Crash',
    letter: 'Q'
  },
  {
    label: 'China',
    letter: 'W'
  },
  {
    label: 'Ride',
    letter: 'E'
  },
  {
    label: 'Hi-Hat',
    letter: 'A'
  },
  {
    label: 'Tom-Tom1',
    letter: 'S'
  },
  {
    label: 'Tom-Tom2',
    letter: 'D'
  },
  {
    label: 'Snare',
    letter: 'Z'
  },
  {
    label: 'Kick',
    letter: 'X'
  },
  {
    label: 'Floor-Tom',
    letter: 'C'
  }
];

export type ISources = {
  label:
    | 'Crash'
    | 'China'
    | 'Ride'
    | 'Hi-Hat'
    | 'Tom-Tom1'
    | 'Tom-Tom2'
    | 'Snare'
    | 'Kick'
    | 'Floor-Tom';
  letter:
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U'
    | 'V'
    | 'W'
    | 'X'
    | 'Y'
    | 'Z';
};

export default sources;
