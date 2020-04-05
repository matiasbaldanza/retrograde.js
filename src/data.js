import {
  PlusIcon,
  FrownIcon,
  MehIcon,
  SmileIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  DeleteIcon,
  StarIcon,
  TrendingUpIcon,
  HeartIcon,
  DownloadIcon,
  MoreHorizontalIcon,
  XIcon,
  GithubIcon,
  ClipboardIcon,
  LinkIcon,
  BookOpenIcon,
  Trash2Icon,
  CheckIcon,
} from 'svelte-feather-icons';

export const Colors = {
  green: {
    selected: 'text-success border-success',
    deselected: 'text-success',
    color: 'text-success border-success',
  },
  blue: {
    selected: 'text-primary border-primary',
    deselected: 'text-primary',
    color: 'text-primary border-primary',
  },
  red: {
    selected: 'text-danger border-danger',
    deselected: 'text-danger',
    color: 'text-danger border-danger',
  },
  yellow: {
    selected: 'text-warning border-warning',
    deselected: 'text-warning',
    color: 'text-warning border-warning',
  },
  cyan: {
    selected: 'text-info border-info',
    deselected: 'text-info',
    color: 'text-info border-info',
  },
};

export const Icons = {
  plus: PlusIcon,
  frown: FrownIcon,
  meh: MehIcon,
  smile: SmileIcon,
  thumbsup: ThumbsUpIcon,
  thumbsdown: ThumbsDownIcon,
  minuscircle: MinusCircleIcon,
  pluscircle: PlusCircleIcon,
  star: StarIcon,
  delete: DeleteIcon,
  trendingup: TrendingUpIcon,
  heart: HeartIcon,
  download: DownloadIcon,
  ellispses: MoreHorizontalIcon,
  close: XIcon,
  github: GithubIcon,
  clipboard: ClipboardIcon,
  link: LinkIcon,
  book: BookOpenIcon,
  trash: Trash2Icon,
  check: CheckIcon,
};

export const BoardTemplates = {
  dropAddKeepImprove: {
    name: 'board.template.drop_add_keep_improve.name',
    ranks: [
      {
        name: 'board.template.drop_add_keep_improve.column.drop',
        icon: 'delete',
        color: 'red',
      },
      {
        name: 'board.template.drop_add_keep_improve.column.add',
        icon: 'pluscircle',
        color: 'green',
      },
      {
        name: 'board.template.drop_add_keep_improve.column.keep',
        icon: 'star',
        color: 'blue',
      },
      {
        name: 'board.template.drop_add_keep_improve.column.improve',
        icon: 'trendingup',
        color: 'yellow',
      },
    ],
  },
  madSadGlad: {
    name: 'board.template.mad_sad_glad.name',
    ranks: [
      {
        name: 'board.template.mad_sad_glad.column.mad',
        icon: 'frown',
        color: 'red',
      },
      {
        name: 'board.template.mad_sad_glad.column.sad',
        icon: 'meh',
        color: 'blue',
      },
      {
        name: 'board.template.mad_sad_glad.column.glad',
        icon: 'smile',
        color: 'green',
      },
    ],
  },
  wellNotWellLacking: {
    name: "board.template.well_not_well_lacking.name",
    ranks: [
      {
        name: 'board.template.well_not_well_lacking.column.went_well',
        icon: 'thumbsup',
        color: 'green',
      },
      {
        name: "board.template.well_not_well_lacking.column.did_no_go_well",
        icon: 'thumbsdown',
        color: 'blue',
      },
      {
        name: 'board.template.well_not_well_lacking.column.lacking',
        icon: 'minuscircle',
        color: 'red',
      },
    ],
  },
  likedLackedLearned: {
    name: 'board.template.liked_lacked_learned.name',
    ranks: [
      {
        name: 'board.template.liked_lacked_learned.column.liked',
        icon: 'thumbsup',
        color: 'green',
      },
      {
        name: 'board.template.liked_lacked_learned.column.lacked',
        icon: 'thumbsdown',
        color: 'red',
      },
      {
        name: 'board.template.liked_lacked_learned.column.learned',
        icon: 'book',
        color: 'cyan',
      },
    ],
  },
};

export function getRankDetails(rank) {
  return {
    icon: Icons[rank.data.icon],
    classes: Colors[rank.data.color],
  };
}
