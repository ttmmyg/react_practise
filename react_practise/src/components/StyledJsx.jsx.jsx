export const StyledJsx = () => {
    
    return(
        <>
         <div className="containar">
            <p className="title">- Styled Jsx -</p>
            <button className="button">FIGHT!!</button>
        </div>

        <style jsx="true">{`
        .containar{
            border: solid 2px #392eff;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .title {
            margin: 0;
            color: red;
        }

        .button {
            background-color: #abedd8;
            border: none;
            padding: 8px;
            border-radius: 8px;
        }

        .button:hover {
            background-color: #46cdcf;
            color: #fff;
            cursor: pointer;
        }
        
        `}</style>
        
        </>
       
    );
};