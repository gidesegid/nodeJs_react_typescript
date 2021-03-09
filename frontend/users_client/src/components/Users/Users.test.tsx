import UsersInfo from './UsersInfo'
import * as ReactDOM from 'react-dom'
// import {render,fireEvent, queryByTestId, queryByText} from '@testing-library/react'
// import { userInfo } from 'os';
// import { isDOMComponent } from 'react-dom/test-utils';



describe('users component',()=>{
    let container:HTMLElement;
    beforeEach(()=>{
        container=document.createElement('div')
        document.body.appendChild(container);
        ReactDOM.render(<UsersInfo/>,container)
    })
    afterEach(()=>{
        document.body.removeChild(container);
       container.remove()

    })
    it('renders users without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UsersInfo/>, div);
    });
    // it('get details btn',()=>{
    //     const {queryByText}=render(<UsersInfo/>);
    //     const linkToDetails=queryByText("Get Details");
    //     expect(linkToDetails).toBeTruthy();
    // })
    
    // it('onClick',()=>{
    //     const {queryByTitle}=render(<UsersInfo/>)
    //     const  btn=queryByTitle("Get Details");

    //     expect(btn?.textContent).toBe("press me");
        
    //     fireEvent.click(btn)
    //     expect(btn?.innerHTML).toBe("you clicked me")

    // })
})
// test('render',()=>{
//     const div = document.createElement('div');
//     ReactDOM.render(<UsersInfo/>, div);
//   })
/*
yet other part of the component will be continued testing here below, comming soon..
*/