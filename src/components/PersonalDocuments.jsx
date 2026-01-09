import React, { useState, useRef } from 'react';
import { FileText, Upload, Download, Trash2, CheckCircle2, AlertCircle, File, Plus } from 'lucide-react';
import './SectionStyles.css';
import './PersonalDocuments.css';

const REQUIRED_DOCUMENTS = [
    { id: 'rg_cpf', label: 'RG ou CNH', required: true },
    { id: 'address', label: 'Comprovante de Residência', required: true },
    { id: 'birth_cert', label: 'Certidão de Nascimento/Casamento', required: false },
    { id: 'bank_details', label: 'Comprovante de Dados Bancários', required: true },
    { id: 'family_docs', label: 'Documentos da Família (Cônjuge/Filhos)', required: false, multiple: true }
];

const PersonalDocuments = () => {
    const [documents, setDocuments] = useState({});
    const [uploading, setUploading] = useState(null);

    const handleFileSelect = (event, doc) => {
        const files = Array.from(event.target.files);
        if (files.length > 0) {
            files.forEach(file => simulateUpload(file, doc));
        }
        // Reset input to allow re-selection of same file if needed
        event.target.value = '';
    };

    const simulateUpload = (file, doc) => {
        setUploading(doc.id);

        setTimeout(() => {
            const fileUrl = URL.createObjectURL(file);
            const fileData = {
                id: Date.now() + Math.random(), // Unique ID for multiple files
                file: file,
                name: file.name,
                url: fileUrl,
                uploadedAt: new Date().toLocaleDateString(),
                status: 'verified'
            };

            setDocuments(prev => {
                const current = prev[doc.id];

                if (doc.multiple) {
                    const list = Array.isArray(current) ? current : [];
                    return { ...prev, [doc.id]: [...list, fileData] };
                } else {
                    return { ...prev, [doc.id]: fileData };
                }
            });
            setUploading(null);
        }, 1500);
    };

    const handleDownload = (docId, fileId = null) => {
        const docData = documents[docId];

        let fileToDownload;
        if (Array.isArray(docData)) {
            fileToDownload = docData.find(f => f.id === fileId);
        } else {
            fileToDownload = docData;
        }

        if (fileToDownload && fileToDownload.url) {
            const link = document.createElement('a');
            link.href = fileToDownload.url;
            link.download = fileToDownload.name || fileToDownload.file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const handleDelete = (docId, fileId = null) => {
        setDocuments(prev => {
            const current = prev[docId];

            if (Array.isArray(current) && fileId) {
                const newList = current.filter(f => f.id !== fileId);
                // If list becomes empty, remove the key entirely or keep empty array? 
                // Keeping empty array might be cleaner, but current check uses truthy. 
                // Let's remove key if empty to match 'existingDoc' check logic.
                if (newList.length === 0) {
                    const newDocs = { ...prev };
                    delete newDocs[docId];
                    return newDocs;
                }
                return { ...prev, [docId]: newList };
            } else {
                const newDocs = { ...prev };
                delete newDocs[docId];
                return newDocs;
            }
        });
    };

    const triggerFileInput = (docId) => {
        document.getElementById(`file-input-${docId}`).click();
    };

    const completedCount = REQUIRED_DOCUMENTS.reduce((acc, doc) => {
        if (documents[doc.id]) {
            if (Array.isArray(documents[doc.id])) {
                return documents[doc.id].length > 0 ? acc + 1 : acc;
            }
            return acc + 1;
        }
        return acc;
    }, 0);

    const progress = (completedCount / REQUIRED_DOCUMENTS.length) * 100;

    return (
        <section className="section-container" id="personal-documents">
            <div className="section-header">
                <FileText size={32} className="section-icon" />
                <h2>Documentação Pessoal</h2>
            </div>

            <div className="glass-panel content-panel">
                <div className="docs-header-info">
                    <p className="subtitle">
                        Para finalizar seu cadastro, precisamos que você envie os documentos listados abaixo.
                        Seus dados estão seguros e criptografados.
                    </p>

                    <div className="docs-progress-container">
                        <div className="docs-progress-header">
                            <span>Progresso do Envio</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                        <div className="docs-progress-track">
                            <div
                                className="docs-progress-bar"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="docs-grid">
                    {REQUIRED_DOCUMENTS.map((doc) => {
                        const existingDoc = documents[doc.id];
                        const isUploading = uploading === doc.id;
                        const isMultiple = doc.multiple;

                        // Check if effectively complete (has at least one file)
                        const isCompleted = isMultiple ? (existingDoc && existingDoc.length > 0) : !!existingDoc;

                        return (
                            <div key={doc.id} className={`doc-card ${isCompleted ? 'completed' : ''}`}>
                                <input
                                    type="file"
                                    id={`file-input-${doc.id}`}
                                    className="hidden-input"
                                    onChange={(e) => handleFileSelect(e, doc)}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    multiple={isMultiple}
                                />

                                <div className="doc-icon-wrapper">
                                    {isCompleted ? (
                                        <CheckCircle2 className="doc-status-icon success" size={24} />
                                    ) : (
                                        <div className="doc-icon-placeholder">
                                            <File size={20} />
                                        </div>
                                    )}
                                </div>

                                <div className="doc-info">
                                    <h4>
                                        {doc.label}
                                        {doc.required && <span className="required-badge">*</span>}
                                    </h4>

                                    {/* Handle Multiple Files List */}
                                    {isMultiple && existingDoc && Array.isArray(existingDoc) && (
                                        <div className="multi-files-list">
                                            {existingDoc.map((fileItem) => (
                                                <div key={fileItem.id} className="file-item-row">
                                                    <span className="file-name">{fileItem.name}</span>
                                                    <div className="file-actions-mini">
                                                        <button
                                                            onClick={() => handleDownload(doc.id, fileItem.id)}
                                                            className="mini-btn"
                                                            title="Baixar"
                                                        ><Download size={14} /></button>
                                                        <button
                                                            onClick={() => handleDelete(doc.id, fileItem.id)}
                                                            className="mini-btn danger"
                                                            title="Remover"
                                                        ><Trash2 size={14} /></button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Handle Single File Info */}
                                    {!isMultiple && existingDoc && !Array.isArray(existingDoc) && (
                                        <p className="doc-meta">
                                            Enviado em {existingDoc.uploadedAt} • {(existingDoc.file.size / 1024 / 1024).toFixed(2)} MB
                                        </p>
                                    )}

                                    {/* Status Text if Empty */}
                                    {!isCompleted && (
                                        <p className="doc-meta">
                                            {isUploading ? 'Enviando...' : 'Pendente de envio'}
                                        </p>
                                    )}
                                </div>

                                <div className="doc-actions">
                                    {/* Single Mode Actions */}
                                    {!isMultiple && isCompleted && (
                                        <>
                                            <button
                                                className="doc-action-btn secondary"
                                                onClick={() => handleDownload(doc.id)}
                                                title="Baixar arquivo"
                                            >
                                                <Download size={18} />
                                            </button>
                                            <button
                                                className="doc-action-btn danger"
                                                onClick={() => handleDelete(doc.id)}
                                                title="Excluir"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </>
                                    )}

                                    {/* Upload Button (Show if not complete OR if multiple allowed) */}
                                    {(!isCompleted || isMultiple) && (
                                        <button
                                            className={`doc-upload-btn ${isMultiple && isCompleted ? 'small-add-btn' : ''}`}
                                            onClick={() => triggerFileInput(doc.id)}
                                            disabled={isUploading}
                                        >
                                            {isUploading ? (
                                                <span className="upload-spinner"></span>
                                            ) : (
                                                <>
                                                    {isMultiple && isCompleted ? <Plus size={16} /> : <Upload size={16} />}
                                                    <span>{isMultiple && isCompleted ? 'Adicionar' : 'Enviar'}</span>
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="docs-alert">
                    <AlertCircle size={20} />
                    <p>Formatos aceitos: PDF e Imagens (JPG/PNG) até 5MB. Em caso de dúvidas, contate o RH.</p>
                </div>
            </div>
        </section>
    );
};

export default PersonalDocuments;
