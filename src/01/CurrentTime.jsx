function CurrentTime() {
    let now = new Date();
    const divStyle = {
        width: '50%',
        padding: '10px',
        margin: '50px',
        backgroundColor: 'skyblue',

        fontSize: '18px',
        color: 'black',
       
        textAlign: 'center'
    }
    return (
        <div style={divStyle}>
            🕒 현재 시간:
            <span className='text-lg text-green-700 font-bold'> {now.toLocaleTimeString()}</span>
        </div>
    );
}
export default CurrentTime;

