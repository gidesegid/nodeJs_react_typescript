import Details, { DetailsProps } from './Details';
import * as ReactDOM from 'react-dom'
import {HistoryLocationMatch} from '../HistoryLocationMatch'
import {url} from '../../CommonVariablesAcrossAllComponents/CommonVariablesAcrossAllComponents'
const { history, location, match } = HistoryLocationMatch(`${url}/:id/details`, { id: '1' });
it('renders details without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Details match={match}
        location={location}
        history={history}/>, div);
});
// test('render',()=>{
//     const div = document.createElement('div');
//     ReactDOM.render(<Details match={match}
//         location={location}
//         history={history}/>, div);
//   })
/*
yet other part of the component will be continue testing here below
*/
