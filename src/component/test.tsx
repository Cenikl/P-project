import 'animate.css'
import './test.css'
export const AnimationTest = () => {
    const count = ["title1","title2","title3"]
    const project = count.map(c => 
        <li key={c}>
            {c}
        </li>)
    return(
        <>
        <h1 className="myproject">Test</h1>
        </>
    );
}