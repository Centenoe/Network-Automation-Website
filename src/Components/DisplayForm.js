import Test from "./NetworkForm";

// <Link
//   to={{
//     pathname: "./NetworkForm",
//     state: data
//   }}
// >

console.log("test")

export default function DisplayForm() {
    return (
            <p> {this.props.name}</p>
    );
}