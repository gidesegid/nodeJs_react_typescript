import UsersInfo from './UsersInfo'
import * as ReactDOM from 'react-dom'
describe('Users list component test',()=>{
    let container=new HTMLDivElement
    beforeEach(()=>{
        container=document.createElement('div')
        document.body.append(container)
        ReactDOM.render(<UsersInfo/>,container)
    })
    afterEach(()=>{
        document.body.removeChild(container);
        container.remove()
    })
    it('Rendered correctly',()=>{
        const lis=container.querySelectorAll('li')
        expect(lis).toHaveLength(20)
    })

})