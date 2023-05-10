let ss = 'S S'
let sally = 'Sally Smith'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let aaron = 'Aaron D. Tyres'

const element = (
       <ul style={{'color':'blue', 'fontSize': '24px'}}>
            <li>{ss}</li>
            <li>{sally}</li>
            <li>{holly}</li>
            <li>{amol}</li>
            <li>{aaron}</li>
            <li>{robin}</li>
       </ul>

    )
    ReactDOM.render(element, document.getElementById('content'))