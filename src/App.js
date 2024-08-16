import PropsEx from './Components/PropsEx'
import SampleCom from './ClassComponent/SampleCom'
import SimpleState from './ClassComponent/SimpleState'
import RootCom from './ClassComponent/RootCom'
import LifeCycle from './LifeCycleMethod/LifeCycle'
import SimpleApi from './ApiCalls/SimpleApi'
import ContactManager from './FakeServer/ContactManager'


function App(){
  return(
    <>
   
    
    
   <ContactManager></ContactManager>
  
   </>
  )  
}
export default App






// class App extends Component {
//   render() {
//     return (
//       <div>
        
//         <h2>heading</h2>
//       </div>
//     )
//   }
// }
// function CourseList(){
//   return(
//     <>
   
//     <ul>
//     <li>html</li>
//     <li>css</li>
//     </ul>
   
//     </>
//   )
// }
// export default App
// export {CourseList}