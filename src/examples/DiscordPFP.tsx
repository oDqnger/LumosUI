import React from "react";
import { Card } from "../components/Card";
import { Divider } from "../components/Divider";
import { Input } from "../components/Input";

interface DiscordPFProps {
    displayName?: string,
    name?: string,
    pronouns?: string,
    aboutMe?: string,
    memberSince?: string
}

export default function DiscordPFP(props: DiscordPFProps) {
    
    const {
        displayName,
        name,
        pronouns,
        aboutMe,
        memberSince,
    } = props;

    return (
        <>
            <Card className="bg-neutral-900 text-white">
                <h1 className="font-bold">{displayName}</h1>
                <h5 className="font-semibold text-sm mt-0">{name}</h5>
                <h5 className="text-sm">{pronouns}</h5>
                <Divider className="mt-3 mb-3 pr-48" />
                <h3 className="font-bold">ABOUT ME</h3>
                <h5 className="text-sm mt-2">{aboutMe}</h5>
                <h3 className="font-bold mt-3 mb-3">DISCORD MEMBER SINCE</h3>
                <h5 className="text-sm mt-2">{memberSince}</h5>
                <Divider className="mt-3 mb-3" />
                <h3 className="font-bold">NOTE</h3>
                <Input type="text" sizes="sm" className="mt-2 mb-3" placeholder="Click to add note" />
            </Card>
        </>
    )
}