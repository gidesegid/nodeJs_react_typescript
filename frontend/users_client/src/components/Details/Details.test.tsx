import Details from './Details';
import * as ReactDOM from 'react-dom'
describe('details component test',()=>{
    let container=new HTMLDivElement
    beforeEach(()=>{
        container=document.createElement('div')
        document.body.append(container)
        // ReactDOM.render(<Details/>,container)
    })
    afterEach(()=>{
        document.body.removeChild(container);
        container.remove()
    })
    it('Rendered correctly',()=>{
        const spans=container.querySelectorAll('span')
        expect(spans).toHaveLength(4)
    })

})