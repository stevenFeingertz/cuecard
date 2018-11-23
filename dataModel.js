// This file holds my ideas for the potential data model

Account
    - Account Type
    - Payment Profile
        Payments? (can this be pulled via api and not kept in db?)
    - User
        Name
        Email
        Phone (SMS)
        Address
        etc...
    - Contacts
    - Stacks
        Start Date/Time
        Shared {id's of users}
        Name
        Theme {school, modern, education, etc.}
        - Cue Card
            Reminders
                n number
                    Who?
                    How?
            Start Time/Trigger
            Duration
            Running/Paused
            Content
                Text Blocks
                Files
                Links
                Feedback
                Real-Time Comms (socket.io)
    - Tags
