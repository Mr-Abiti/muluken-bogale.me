export const researchItems: ResearchItem[] = [
  {
    id: 'web-development',
    title: 'Website Design and Development',
    tags: ['Business/Corporate','Stock Management', 'E-student', 'E-Commerce', 'Educational', 'Entertainment','Portfolio'],
    authors: { name: 'Muluken Bogale', avatar: '/static/images/web-design.png' },
    abstract:
      'Antibodies are highly diverse proteins, that specifically target a large range of molecules. This diversity can be utilised via engineering techniques to produce antibodies that bind specific targets. Currently the discovery',
    date: '2020-04-07',
    pdf: '/static/report.pdf',
  },
  {
    id: 'mobile-application',
    title: 'Mobile Application design and Development',
    tags: ['Business', 'Delivery System', 'E-commerce', 'Dissertation'],
    authors: { name: 'Muluken Bogale', avatar: '/static/images/mobile-app.png' },
    abstract:
      'Antibodies are highly diverse proteins, that specifically target a large range of molecules. This diversity can be utilised via engineering techniques to produce antibodies that bind specific targets. Currently the discovery',
    date: '2020-04-07',
    pdf: '/static/report.pdf',
  },
  {
    id: 'telegram-bot',
    title: 'Telegram Bot Development',
    tags: ['Business', 'E-commerce', 'Management'],
    authors: { name: 'Muluken Bogale', avatar: '/static/images/telegram-bot.jpeg' },
    abstract:
      'Antibodies are highly diverse proteins, that specifically target a large range of molecules. This diversity can be utilised via engineering techniques to produce antibodies that bind specific targets. Currently the discovery',
    date: '2020-04-07',
    pdf: '/static/report.pdf',
  },
  {
    id: 'system-Design',
    title: 'System Design',
    tags: ['Overall System Design', 'Improving Existing Design', 'Adding New Feature'],
    authors: { name: 'Muluken Bogale', avatar: '/static/images/system-design.png' },
    abstract:
      'Antibodies are highly diverse proteins, that specifically target a large range of molecules. This diversity can be utilised via engineering techniques to produce antibodies that bind specific targets. Currently the discovery',
    date: '2020-04-07',
    pdf: '/static/report.pdf',
  },
  {
    id: 'consulting',
    title: 'Consulting',
    tags: ['Operations consulting', 'Information technology consulting',],
    authors: { name: 'Muluken Bogale', avatar: '/static/images/consult.png' },
    abstract:
      'Antibodies are highly diverse proteins, that specifically target a large range of molecules. This diversity can be utilised via engineering techniques to produce antibodies that bind specific targets. Currently the discovery',
    date: '2020-04-07',
    pdf: '/static/report.pdf',
  },
];

export interface ResearchItem {
  id: string;
  title: string;
  tags: string[];
  authors: { name: string; avatar: string };
  abstract: string;
  date: string;
  pdf: string;
}
