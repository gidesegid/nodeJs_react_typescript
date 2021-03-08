import UsersInfo from './UsersInfo'
import * as ReactDOM from 'react-dom'
it('renders users without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UsersInfo/>, div);
});
/*
yet other part of the component will be continued testing here below, comming soon..
*/