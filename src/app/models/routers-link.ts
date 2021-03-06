export interface routerDTO {
  urlName: string;
  urlLink: string;
  subClass?: string;
}

export const footerRouterLink: routerDTO[] = [
  {
    urlName: 'Terms',
    urlLink: '#',
  },
  {
    urlName: 'Privacy',
    urlLink: '#',
  },
  {
    urlName: 'Security',
    urlLink: '#',
  },
  {
    urlName: 'Contact',
    urlLink: '#',
  },
];

export const loginRouterLink: routerDTO[] = [
  {
    urlName: 'Forgot password?',
    urlLink: '#',
  },

  {
    urlName: 'Create an account',
    urlLink: 'register-page',
    subClass: 'main-color',
  },
];

export const registerRouterLink: routerDTO[] = [
  {
    urlName: 'Already have an account?',
    urlLink: 'login-page',
    subClass: 'main-color',
  },
];
