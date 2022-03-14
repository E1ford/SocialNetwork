import React, { useEffect } from 'react';
import styles from './ProfileStatus.module.css';

const ProfileStatus = ({ status, updateStatusThunk }) => {
  useEffect(() => {
    console.log('effect');
    setLocalStatus(status);
  }, [status]);

  let [editMode, setEditMode] = React.useState(false);
  let [localStatus, setLocalStatus] = React.useState(status);

  let onActiveChangeMod = () => {
    setEditMode(true);
  };
  let onDeactivateChangeMod = () => {
    updateStatusThunk(localStatus);
    setEditMode(false);
  };
  let onLocalStatusChange = (e) => {
    setLocalStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode ? (
        <input
          autoFocus
          onBlur={onDeactivateChangeMod}
          onChange={onLocalStatusChange}
          type="text"
          value={localStatus}
        />
      ) : (
        <div onDoubleClick={onActiveChangeMod} className={styles.status}>
          {status}
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
