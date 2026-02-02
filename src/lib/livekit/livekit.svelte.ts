import {Room, RoomEvent, LocalParticipant} from 'livekit-client';

const room = new Room();

room.on(RoomEvent.Connected, () => {
    window.location.assign("/spreadsheet");
    console.log("Connected to room: " );
    
})

