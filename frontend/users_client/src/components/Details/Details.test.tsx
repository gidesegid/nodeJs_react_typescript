import Details, { DetailsProps } from './Details';
import * as ReactDOM from 'react-dom'
import {HistoryLocationMatch} from '../HistoryLocationMatch'
const { history, location, match } = HistoryLocationMatch('http://localhost:3000/:id/details', { id: '1' });
it('renders details without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Details match={match}
        location={location}
        history={history}/>, div);
});
