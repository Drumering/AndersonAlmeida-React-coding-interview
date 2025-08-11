import React, { useState, useRef, useEffect } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

export interface InlineEditProps {
    value: string;
    onChange: (value: string) => void;
    inputProps?: React.ComponentProps<typeof TextField>;
    disabled?: boolean;
    validate?: (value: string) => string | null;
}

export const InlineEdit: React.FC<InlineEditProps> = ({
    value,
    onChange,
    inputProps,
    disabled,
    validate
}) => {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState(value);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (editing) inputRef.current?.focus();
    }, [editing]);

    useEffect(() => {
        setDraft(value);
    }, [value]);

    const handleSave = () => {
        const validationError = validate ? validate(draft) : null;
        setError(validationError);
        if (!validationError && draft !== value) {
            onChange(draft);
            setEditing(false);
        } else if (!validationError) {
            setEditing(false);
        }
    };

    return (
        <Box display="flex" alignItems="center" gap={1}>
            {editing ? (
                <>
                    <TextField
                        size="small"
                        value={draft}
                        onChange={e => setDraft(e.target.value)}
                        onBlur={() => setEditing(false)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') handleSave();
                            if (e.key === 'Escape') setEditing(false);
                        }}
                        inputRef={inputRef}
                        disabled={disabled}
                        {...inputProps}
                        error={!!error}
                        helperText={error}
                    />
                    <IconButton size="small" onClick={handleSave} disabled={disabled}>
                        <CheckIcon fontSize="small" />
                    </IconButton>
                </>
            ) : (
                <>
                    <Box
                        component="span"
                        sx={{ cursor: disabled ? 'not-allowed' : 'pointer', minWidth: 0 }}
                        onClick={() => !disabled && setEditing(true)}
                        tabIndex={0}
                        onKeyDown={e => {
                            if (!disabled && (e.key === 'Enter' || e.key === ' ')) setEditing(true);
                        }}
                        aria-label="Edit"
                    >
                        {value}
                    </Box>
                    <IconButton
                        size="small"
                        onClick={() => setEditing(true)}
                        disabled={disabled}
                        aria-label="Edit"
                    >
                        <EditIcon fontSize="small" />
                    </IconButton>
                </>
            )}
        </Box>
    );
};