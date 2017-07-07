import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Thread from '../src/Thread';
import '../src/index.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Thread', module).add('Reddit Thread', () => <Thread title="Le Reddit" author="faultless" publishedDate="9/1/1" comments="" link="https://b.thumbs.redditmedia.com/GmiaHqV8AjzHurnccUXiZ0cIQt53hCKup5An2dv0rzI.png" />)