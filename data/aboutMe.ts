const style = (props) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const info = (props: any): { input: string; return: string }[] => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.currentLocation',
    return: '"Addis Ababa, Ethiopia"',
  },

  {
    input: 'self.interests',
    return: '["Programing", "Machine Learning", "Data science" , "Psychology"]',
  },
  {
    input: 'self.education',
    return: '"B.Sc Computer Science and Engineering - Adama Science and Technology University"',
  },
  {
    input: 'self.skills',
    return:
      '[ "JavaScript", "Python", "React", "NodeJS", "Django", "GraphQl", "VueJs", "git"]',
  },
  {
    input: 'self.contactMe()',
    return: `["<a rel="noopener" style="${style(
      props
    )}" href="mailto:mulukenb89@gmail.com">Drop a Mail</a>",
      "<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/mr-abiti/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/mr-Abiti">Github</a>", "<a rel="noopener" style="${style(
      props
    )}" href="https://www.instagram.com/accounts/login/">UpWork</a>"]`,
  },
];

export default info;
