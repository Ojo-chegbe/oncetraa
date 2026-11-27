CREATE TABLE IF NOT EXISTS volunteer_applications (
    application_id uuid PRIMARY KEY,
    received_at timestamptz NOT NULL DEFAULT now(),
    answers jsonb NOT NULL CHECK (jsonb_typeof(answers) = 'object'),
    status text NOT NULL DEFAULT 'New'
        CHECK (status IN ('New', 'In review', 'Shortlisted', 'Invited', 'Confirmed', 'Waitlisted', 'Not selected')),
    reviewer text NOT NULL DEFAULT '',
    assigned_role text NOT NULL DEFAULT '',
    decision_notes text NOT NULL DEFAULT '',
    last_contacted date,
    revision integer NOT NULL DEFAULT 0 CHECK (revision >= 0)
);

CREATE INDEX IF NOT EXISTS volunteer_applications_queue_idx
    ON volunteer_applications (status, received_at DESC, application_id);
