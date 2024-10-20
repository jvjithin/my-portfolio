import React, { useState, useEffect } from 'react';
import resumeDocx from '../assets/resume/Jithin.docx';
import resumePdf from '../assets/resume/Jithin.pdf';

const DownloadButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.resume-container')) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const downloadFile = (fileType) => {
    const link = document.createElement('a');
    link.href = fileType === '.docx' ? resumeDocx : resumePdf;
    link.download = `Jithin${fileType}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <button onClick={toggleDropdown} className="resume-button"><i className="fa fa-cloud-download"></i> Resume <i className={`fa fa-angle-${isDropdownOpen ? 'up' : 'down'}`}></i></button>
      {isDropdownOpen && (
        <div className="resume-dropdown">
          <button className="resume-option" onClick={() => downloadFile('.pdf')}><i className="fa fa-download"></i> .pdf</button>
          <button className="resume-option" onClick={() => downloadFile('.docx')}><i className="fa fa-download"></i> .docx</button>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;