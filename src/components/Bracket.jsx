import React from 'react'
import { useState, useEffect } from 'react'
import { useBracket } from '../BracketProvider'
import useTeams from './Teams'

function Bracket() {
    const { Ira, Kai, Sabrina, Connor, Una, Aaron } = useTeams();
    const { gen, editor } = useBracket();
    const columns = [
        { id: "col1", slots: 32 },
        { id: "col2", slots: 16 },
        { id: "col3", slots: 8 },
        { id: "col4", slots: 4 },
        { id: "col5", slots: 2 },
        { id: "col6", slots: 3 },
        { id: "col7", slots: 2 },
        { id: "col8", slots: 4 },
        { id: "col9", slots: 8 },
        { id: "col10", slots: 16 },
        { id: "col11", slots: 32 }
    ];
    const [allData, setAllData] = useState([]);
    const [bracketData, setBracketData] = useState([]);

    useEffect(() => {
        let selectedData = [];

        if (gen === "Men's") {
            if (editor === 'Ira') {
                selectedData = Ira[1];
            } else if (editor === 'Kai') {
                selectedData = Kai[1];
            } else if (editor === 'Aaron') {
                selectedData = Aaron[1];
            } else if (editor === 'Connor') {
                selectedData = Connor[1];
            } else if (editor === 'Sabrina') {
                selectedData = Sabrina[1];
            } else if (editor === 'Una') {
                selectedData = Una[1];
            } else {
                selectedData = Ira[1];
            }
            // selectedData = { Ira, Kai, Aaron, Connor, Sabrina, Una }[editor][1];
        } else {
            if (editor === 'Ira') {
                selectedData = Ira[0];
            } else if (editor === 'Kai') {
                selectedData = Kai[0];
            } else if (editor === 'Aaron') {
                selectedData = Aaron[0];
            } else if (editor === 'Connor') {
                selectedData = Connor[0];
            } else if (editor === 'Sabrina') {
                selectedData = Sabrina[0];
            } else if (editor === 'Una') {
                selectedData = Una[0];
            } else {
                selectedData = Ira[1];
            }
            // selectedData = { Ira, Kai, Aaron, Connor, Sabrina, Una }[editor][0];
        }

        setAllData(selectedData);
    }, [gen, editor, Aaron, Connor, Ira, Kai, Sabrina, Una]);

    useEffect(() => {
        if (!allData || allData.length === 0) return;

        const updatedBracketData = [];
        allData.forEach((team, k) => {
            if (k <= 31) updatedBracketData.push({ key: `c1s${k + 1}`, text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
            else if (k >= 32 && k <= 63) updatedBracketData.push({ key: `c11s${k - 31}`, text: `${team.Name} ${team.ID.substring(1, team.ID.length)}` });
            else if (k === 64) updatedBracketData.push({ key: "r1", text: team.Name });
            else if (k === 65) updatedBracketData.push({ key: "r2", text: team.Name });
            else if (k === 66) updatedBracketData.push({ key: "r3", text: team.Name });
            else if (k === 67) updatedBracketData.push({ key: "r4", text: team.Name });
            else if (k === 68) updatedBracketData.push({ key: "fflabel1", text: team.Name });
            else if (k === 69) updatedBracketData.push({ key: "fflabel2", text: team.Name });
            else if (k === 70) updatedBracketData.push({ key: "fflabel3", text: team.Name });
            else if (k === 71) updatedBracketData.push({ key: "fflabel4", text: team.Name });

            // Round of 32
            if (k < 16 && team.Round >= 2) updatedBracketData.push({ key: `c2s${Math.ceil((k + 0.1) / 2)}`, text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
            if (k >= 16 && k < 32 && team.Round >= 2) updatedBracketData.push({ key: `c2s${Math.ceil((k + 0.1) / 2)}`, text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
            if (k >= 32 && k < 48 && team.Round >= 2) updatedBracketData.push({ key: `c10s${Math.ceil((k + 0.1) / 2) - 16}`, text: `${team.Name} ${team.ID.substring(1, team.ID.length)}` });
            if (k >= 48 && k < 64 && team.Round >= 2) updatedBracketData.push({ key: `c10s${Math.ceil((k + 0.1) / 2) - 16}`, text: `${team.Name} ${team.ID.substring(1, team.ID.length)}` });

            // Sweet 16
            if (k < 16 && team.Round >= 3) updatedBracketData.push({ key: `c3s${Math.ceil((k + 0.1) / 4)}`, text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
            if (k >= 16 && k < 32 && team.Round >= 3) updatedBracketData.push({ key: `c3s${Math.ceil((k + 0.1) / 4)}`, text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
            if (k >= 32 && k < 48 && team.Round >= 3) updatedBracketData.push({ key: `c9s${Math.ceil((k + 0.1) / 4) - 8}`, text: `${team.Name} ${team.ID.substring(1, team.ID.length)}` });
            if (k >= 48 && k < 64 && team.Round >= 3) updatedBracketData.push({ key: `c9s${Math.ceil((k + 0.1) / 4) - 8}`, text: `${team.Name} ${team.ID.substring(1, team.ID.length)}` });

            // Elite 8
            if (k < 16 && team.Round >= 4) updatedBracketData.push({ key: `c4s${Math.ceil((k + 0.1) / 8)}`, text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
            if (k >= 16 && k < 32 && team.Round >= 4) updatedBracketData.push({ key: `c4s${Math.ceil((k + 0.1) / 8)}`, text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
            if (k >= 32 && k < 48 && team.Round >= 4) updatedBracketData.push({ key: `c8s${Math.ceil((k + 0.1) / 8) - 4}`, text: `${team.Name} ${team.ID.substring(1, team.ID.length)}` });
            if (k >= 48 && k < 64 && team.Round >= 4) updatedBracketData.push({ key: `c8s${Math.ceil((k + 0.1) / 8) - 4}`, text: `${team.Name} ${team.ID.substring(1, team.ID.length)}` });

            // Final Four
            if (k < 16 && team.Round >= 5) updatedBracketData.push({ key: "c5s1", text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
            if (k >= 16 && k < 32 && team.Round >= 5) updatedBracketData.push({ key: "c5s2", text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
            if (k >= 32 && k < 48 && team.Round >= 5) updatedBracketData.push({ key: "c7s1", text: `${team.Name} ${team.ID.substring(1, team.ID.length)}` });
            if (k >= 48 && k < 64 && team.Round >= 5) updatedBracketData.push({ key: "c7s2", text: `${team.Name} ${team.ID.substring(1, team.ID.length)}` });

            // Championship
            if (k < 32 && team.Round >= 6) updatedBracketData.push({ key: "c6s1", text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
            if (k >= 32 && team.Round >= 6) updatedBracketData.push({ key: "c6s2", text: `${team.Name} ${team.ID.substring(1, team.ID.length)}` });

            // Champion
            if (team.Round === 7) updatedBracketData.push({ key: "c6s0", text: `${team.ID.substring(1, team.ID.length)} ${team.Name}` });
        });

        setBracketData(updatedBracketData);
    }, [allData]);
    console.log("Bracket Rendered - Editor:", editor, "Gen:", gen);

    return (
        <div className="bracket">
            <div className="rlabels">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} id={`r${i + 1}`} className="rlabel"></div>
                ))}
            </div>

            {columns.map(({ id, slots }) => (
                <div key={id} id={id} className="column">
                    {Array.from({ length: Math.ceil(slots / 2) }).map((_, i) => {
                        const t = i * 2;
                        const colPrefix = id.replace("col", "c");
                        const slotKey = `${colPrefix}s${t + 1}`;
                        const nextSlotKey = `${colPrefix}s${t + 2}`;
                        const teamData = bracketData.find((data) => data.key === slotKey);
                        const nextTeamData = bracketData.find((data) => data.key === nextSlotKey);

                        if (Number(id.substring(3, id.length)) <= 5) {
                            if (Number(id.substring(3, id.length)) === 1) {
                                if (t !== slots - 2) {
                                    return (
                                        <div key={t}>
                                            <div
                                                id={slotKey}
                                                className="slot"
                                                data-col={id.replace("col", "")}
                                                data-game={Math.ceil((t + 1) / 2)}
                                                style={{ "borderTopLeftRadius": "8px", "borderBottom": "0px" }}
                                            >
                                                {teamData ? teamData.text : ""}
                                            </div>
                                            <div
                                                id={nextSlotKey}
                                                className="slot"
                                                data-col={id.replace("col", "")}
                                                data-game={Math.ceil((t + 2) / 2)}
                                                style={{ "borderBottomLeftRadius": "8px" }}
                                            >
                                                {nextTeamData ? nextTeamData.text : ""}
                                            </div>
                                            <hr align="left" />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={t}>
                                            <div
                                                id={slotKey}
                                                className="slot"
                                                data-col={id.replace("col", "")}
                                                data-game={Math.ceil((t + 1) / 2)}
                                                style={{ "borderTopLeftRadius": "8px", "borderBottom": "0px" }}
                                            >
                                                {teamData ? teamData.text : ""}
                                            </div>
                                            <div
                                                id={nextSlotKey}
                                                className="slot"
                                                data-col={id.replace("col", "")}
                                                data-game={Math.ceil((t + 2) / 2)}
                                                style={{ "borderBottomLeftRadius": "8px" }}
                                            >
                                                {nextTeamData ? nextTeamData.text : ""}
                                            </div>
                                        </div>
                                    )
                                }
                            }
                            if (t !== slots - 2) {
                                if (colPrefix === "c2") {
                                    return (
                                        <div key={t}>
                                            <div key={t} className="vliner">
                                                <div
                                                    id={slotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 1) / 2)}
                                                >
                                                    {teamData ? teamData.text : ""}
                                                </div>
                                                <div
                                                    id={nextSlotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 2) / 2)}
                                                >
                                                    {nextTeamData ? nextTeamData.text : ""}
                                                </div>
                                            </div>
                                            <div className="spacer2" />
                                        </div>
                                    );
                                } else if (colPrefix === "c3") {
                                    return (
                                        <div key={t}>
                                            <div key={t} className="vliner">
                                                <div
                                                    id={slotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 1) / 2)}
                                                >
                                                    {teamData ? teamData.text : ""}
                                                </div>
                                                <div
                                                    id={nextSlotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 2) / 2)}
                                                >
                                                    {nextTeamData ? nextTeamData.text : ""}
                                                </div>
                                            </div>
                                            <div className="spacer15" />
                                        </div>
                                    );
                                } else if (colPrefix === "c4") {
                                    return (
                                        <div key={t}>
                                            <div key={t} className="vliner">
                                                <div
                                                    id={slotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 1) / 2)}
                                                >
                                                    {teamData ? teamData.text : ""}
                                                </div>
                                                <div
                                                    id={nextSlotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 2) / 2)}
                                                >
                                                    {nextTeamData ? nextTeamData.text : ""}
                                                </div>
                                            </div>
                                            <div className="spacer180" />
                                        </div>
                                    );
                                } else if (colPrefix === "c5") {
                                    return (
                                        <div style={{ position: "relative", top: "50%" }}>
                                            <div key={t} className="vliner">
                                                <div
                                                    id={slotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 1) / 2)}
                                                >
                                                    {teamData ? teamData.text : ""}
                                                </div>
                                                <div
                                                    id={nextSlotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 2) / 2)}
                                                >
                                                    {nextTeamData ? nextTeamData.text : ""}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            } else {
                                return (
                                    <div key={t} className="vliner">
                                        <div
                                            id={slotKey}
                                            className="slot"
                                            data-col={id.replace("col", "")}
                                            data-game={Math.ceil((t + 1) / 2)}
                                            style={{ "borderTopLeftRadius": "8px" }}
                                        >
                                            {teamData ? teamData.text : ""}
                                        </div>
                                        <div
                                            id={nextSlotKey}
                                            className="slot"
                                            data-col={id.replace("col", "")}
                                            data-game={Math.ceil((t + 2) / 2)}
                                            style={{ "marginBottom": "0px", "borderBottomLeftRadius": "8px" }}

                                        >
                                            {nextTeamData ? nextTeamData.text : ""}
                                        </div>
                                    </div>
                                );
                            }
                        }
                        else if (Number(id.substring(3, id.length)) === 6) {
                            if (t !== 0) { return (<div />) }
                            const winnerSlotKey = `${colPrefix}s${t}`;
                            const winnerTeamData = bracketData.find((data) => data.key === winnerSlotKey);
                            return (
                                <div id="col6">
                                    <div className="slot c6" id="c6s1" data-col="6" data-game="1">{teamData ? teamData.text : ""}</div>
                                    <div className="slot c6 winner" id="c6s0" data-col="6" data-game="0">{winnerTeamData ? winnerTeamData.text : ""}</div>
                                    <div className="slot c6" id="c6s2" data-col="6" data-game="2">{nextTeamData ? nextTeamData.text : ""}</div>
                                </div>
                            )
                        } else {
                            if (Number(id.substring(3, id.length)) === 11) {
                                if (t !== slots - 2) {
                                    return (
                                        <div key={t}>
                                            <div
                                                id={slotKey}
                                                className="slot"
                                                data-col={id.replace("col", "")}
                                                data-game={Math.ceil((t + 1) / 2)}
                                                style={{ "borderTopRightRadius": "8px", "borderBottom": "0px" }}
                                            >
                                                {teamData ? teamData.text : ""}
                                            </div>
                                            <div
                                                id={nextSlotKey}
                                                className="slot"
                                                data-col={id.replace("col", "")}
                                                data-game={Math.ceil((t + 2) / 2)}
                                                style={{ "borderBottomRightRadius": "8px" }}
                                            >
                                                {nextTeamData ? nextTeamData.text : ""}
                                            </div>
                                            <hr align="left" />
                                        </div>
                                    )
                                } else {
                                    <div key={t}>
                                        <div
                                            id={slotKey}
                                            className="slot"
                                            data-col={id.replace("col", "")}
                                            data-game={Math.ceil((t + 1) / 2)}
                                            style={{ "borderTopRightRadius": "8px", "borderBottom": "0px" }}
                                        >
                                            {teamData ? teamData.text : ""}
                                        </div>
                                        <div
                                            id={nextSlotKey}
                                            className="slot"
                                            data-col={id.replace("col", "")}
                                            data-game={Math.ceil((t + 2) / 2)}
                                            style={{ "borderBottomRightRadius": "8px" }}
                                        >
                                            {teamData ? teamData.text : ""}
                                        </div>
                                    </div>
                                }
                            }
                            else if (t !== slots - 2) {
                                if (colPrefix === "c10") {
                                    return (
                                        <div key={t}>
                                            <div key={t} className="vlinel">
                                                <div
                                                    id={slotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 1) / 2)}
                                                >
                                                    {teamData ? teamData.text : ""}
                                                </div>
                                                <div
                                                    id={nextSlotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 2) / 2)}
                                                >
                                                    {nextTeamData ? nextTeamData.text : ""}
                                                </div>
                                            </div>
                                            <div className="spacer2" />
                                        </div>
                                    );
                                } else if (colPrefix === "c9") {
                                    return (
                                        <div key={t}>
                                            <div key={t} className="vlinel">
                                                <div
                                                    id={slotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 1) / 2)}
                                                >
                                                    {teamData ? teamData.text : ""}
                                                </div>
                                                <div
                                                    id={nextSlotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 2) / 2)}
                                                >
                                                    {nextTeamData ? nextTeamData.text : ""}
                                                </div>
                                            </div>
                                            <div className="spacer15" />
                                        </div>
                                    );
                                } else if (colPrefix === "c8") {
                                    return (
                                        <div key={t}>
                                            <div key={t} className="vlinel">
                                                <div
                                                    id={slotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 1) / 2)}
                                                >
                                                    {teamData ? teamData.text : ""}
                                                </div>
                                                <div
                                                    id={nextSlotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 2) / 2)}
                                                >
                                                    {nextTeamData ? nextTeamData.text : ""}
                                                </div>
                                            </div>
                                            <div className="spacer180" />
                                        </div>
                                    );
                                } else if (colPrefix === "c7") {
                                    return (
                                        <div style={{ position: "relative", top: "50%" }}>
                                            <div key={t} className="vlinel">
                                                <div
                                                    id={slotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 1) / 2)}
                                                >
                                                    {teamData ? teamData.text : ""}
                                                </div>
                                                <div
                                                    id={nextSlotKey}
                                                    className="slot"
                                                    data-col={id.replace("col", "")}
                                                    data-game={Math.ceil((t + 2) / 2)}
                                                >
                                                    {nextTeamData ? nextTeamData.text : ""}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            }

                            return (
                                <div key={t} className="vlinel">
                                    <div
                                        id={slotKey}
                                        className="slot"
                                        data-col={id.replace("col", "")}
                                        data-game={Math.ceil((t + 1) / 2)}
                                        style={{ "borderTopRightRadius": "8px" }}

                                    >
                                        {teamData ? teamData.text : ""}
                                    </div>
                                    <div
                                        id={nextSlotKey}
                                        className="slot"
                                        data-col={id.replace("col", "")}
                                        data-game={Math.ceil((t + 2) / 2)}
                                        style={{ "marginBottom": "0px", "borderBottomRightRadius": "8px" }}
                                    >
                                        {nextTeamData ? nextTeamData.text : ""}
                                    </div>
                                </div>
                            );

                        }
                    })}
                </div>
            ))}
        </div>
    );
}

export default Bracket