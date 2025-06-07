import React from 'react';

function CLIOutput({cli}){

    const [command, ...args] = cli.trim().split(" ");

    function renderComponent(){
        switch(command){
            case 'hello':
                return <p>Greeting {args.join(" ")||"User"}</p>
            case 'sum':
                const val = args.reduce((sum, curr)=>sum+Number(curr),0);
                return <p>The sum is: {val}</p>
            default:
                return <p>There is no command: {command}</p>
        }
    }

    return (
        <div>
            {renderComponent()}

        </div>
    );

}


export default CLIOutput;
