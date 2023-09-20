
import { useState } from "react";
import CreationTable from "./CreationTable";
import classes from "./MasterCreation.module.css";

export default function MasterCreation(){
    const [data, setData]= useState([]);

    function handleSubmit(event){
        event.preventDefault();
        const form= new FormData(event.target);
        const formData=Object.fromEntries(form);
        setData((prevState)=>[...prevState, formData]);
    }

    return <>
        <header className={classes.header}>
            <p>Master Design Creation</p>
        </header>
        <div className={classes.below}>
            <fieldset>
                <legend>Entry Details</legend>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <input className={classes.date} type="date"/>
                    <section className={classes.fields}>
                        <div className={classes.group} style={{minWidth:"30%"}}>
                            <label>Main Group</label>
                            <select name="main-group" defaultValue="Diamond">
                                <option value="Diamond">Diamond</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option> 
                            </select>
                        </div>
                        <div className={classes.group} style={{minWidth:"30%"}}>
                            <label>Category</label>
                            <select name="category" defaultValue="Diamond Jewellery">
                                <option value="Diamond Jewellery">Diamond Jewellery</option>
                                <option value="Gold Jewellery">Gold Jewellery</option>
                                <option value="Silver Jewellery">Silver Jewellery</option>
                            </select>
                        </div>
                        <div className={classes.group} style={{minWidth:"30%"}}>
                            <label>Style</label>
                            <select name="style" defaultValue="Open Setting 1">
                                <option value="Open Setting 1">Open Setting 1</option>
                            </select>
                        </div>
                        <div className={classes.group} style={{minWidth:"30%"}}>
                            <label>Product</label>
                            <select name="product" defaultValue="Necklace">
                                <option value="Necklace">Necklace</option>
                            </select>
                        </div>
                        <div className={classes.group}>
                            <label>Model</label>
                            <select name="model" defaultValue="Fancy">
                                <option value="Fancy">Fancy</option>
                            </select>
                        </div>
                        <div className={classes.group}>
                            <label>Size</label>
                            <select name="size" defaultValue="N/A">
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                        <div className={classes.group}>
                            <label>Worker</label>
                            <select name="worker" defaultValue="Worker-1">
                                <option value="Worker-1">Worker-1</option>
                            </select>
                        </div>
                        <div className={classes["num-group"]}  style={{maxWidth:"10%"}}>
                            <label>Pcs</label>
                            <input name="pcs" type="number" defaultValue={1}/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>Gross Wt</label>
                            <input name="gross-wt" type="number" defaultValue={185.250}/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>stone Wt</label>
                            <input name="stone-wt" type="number" defaultValue={18.650}/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>Net Wt</label>
                            <input name="net-wt" type="number" defaultValue={166.600}/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>Com- Wt</label>
                            <input name="com-wt" type="number" defaultValue={15.250}/>
                        </div>
                        <div className={classes["num-group"]}>
                            <label>Ghat Wt</label>
                            <input name="ghat-wt" type="number" defaultValue={121.250}/>
                        </div>
                        <div className={classes.remarks}>
                            <label>Remarks</label>
                            <input name="remarks" type="text" placeholder="Description"/>
                        </div>
                        <div className={classes.group}  style={{minWidth:"20%"}}>
                            <label>Type</label>
                            <select name="type" defaultValue="Type 1">
                                <option value="Type 1">Type 1</option>
                            </select>
                        </div>
                        <div className={classes.group}  style={{minWidth:"20%"}}>
                            <label>Stone Group</label>
                            <select name="stone-group" defaultValue="Stone Group 1">
                                <option value="Stone Grp 1">Stone Group 1</option>
                            </select>
                        </div>
                        <div className={classes["num-group"]}  style={{maxWidth:"10%"}}>
                            <label>Pcs</label>
                            <input name="pcs1" type="number" defaultValue={1} placeholder="Enter Pcs" style={{padding:"0.5rem"}} />
                        </div>
                        <div className={classes["num-group"]}>
                            <label>Weight</label>
                            <input name="weight" type="number" defaultValue={185.250} placeholder="Enter Gross Wt" style={{padding:"0.5rem"}}/>
                        </div>
                        <button>ADD</button>
                    </section>
                </form>
                <CreationTable rowDataArr={data} />
                <div className={classes.actions}>
                    <button style={{marginRight:"3rem"}}>Add Image</button>
                    <button>Save</button>
                    <button>Clear</button>
                    <button>Exit</button>
                </div>
            </fieldset>
            <div className={classes.image}>
                <img src="https://picsum.photos/536/361" alt="Design Image"/>
            </div>
        </div>
    </>
}