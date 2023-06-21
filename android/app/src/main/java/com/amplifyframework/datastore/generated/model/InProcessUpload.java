package com.amplifyframework.datastore.generated.model;


import androidx.core.util.ObjectsCompat;

import java.util.Objects;
import java.util.List;

/** This is an auto generated class representing the InProcessUpload type in your schema. */
public final class InProcessUpload {
  private final String uploadId;
  private final String fileName;
  private final String contentType;
  private final String createdAt;
  public String getUploadId() {
      return uploadId;
  }
  
  public String getFileName() {
      return fileName;
  }
  
  public String getContentType() {
      return contentType;
  }
  
  public String getCreatedAt() {
      return createdAt;
  }
  
  private InProcessUpload(String uploadId, String fileName, String contentType, String createdAt) {
    this.uploadId = uploadId;
    this.fileName = fileName;
    this.contentType = contentType;
    this.createdAt = createdAt;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      InProcessUpload inProcessUpload = (InProcessUpload) obj;
      return ObjectsCompat.equals(getUploadId(), inProcessUpload.getUploadId()) &&
              ObjectsCompat.equals(getFileName(), inProcessUpload.getFileName()) &&
              ObjectsCompat.equals(getContentType(), inProcessUpload.getContentType()) &&
              ObjectsCompat.equals(getCreatedAt(), inProcessUpload.getCreatedAt());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getUploadId())
      .append(getFileName())
      .append(getContentType())
      .append(getCreatedAt())
      .toString()
      .hashCode();
  }
  
  public static UploadIdStep builder() {
      return new Builder();
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(uploadId,
      fileName,
      contentType,
      createdAt);
  }
  public interface UploadIdStep {
    FileNameStep uploadId(String uploadId);
  }
  

  public interface FileNameStep {
    ContentTypeStep fileName(String fileName);
  }
  

  public interface ContentTypeStep {
    CreatedAtStep contentType(String contentType);
  }
  

  public interface CreatedAtStep {
    BuildStep createdAt(String createdAt);
  }
  

  public interface BuildStep {
    InProcessUpload build();
  }
  

  public static class Builder implements UploadIdStep, FileNameStep, ContentTypeStep, CreatedAtStep, BuildStep {
    private String uploadId;
    private String fileName;
    private String contentType;
    private String createdAt;
    @Override
     public InProcessUpload build() {
        
        return new InProcessUpload(
          uploadId,
          fileName,
          contentType,
          createdAt);
    }
    
    @Override
     public FileNameStep uploadId(String uploadId) {
        Objects.requireNonNull(uploadId);
        this.uploadId = uploadId;
        return this;
    }
    
    @Override
     public ContentTypeStep fileName(String fileName) {
        Objects.requireNonNull(fileName);
        this.fileName = fileName;
        return this;
    }
    
    @Override
     public CreatedAtStep contentType(String contentType) {
        Objects.requireNonNull(contentType);
        this.contentType = contentType;
        return this;
    }
    
    @Override
     public BuildStep createdAt(String createdAt) {
        Objects.requireNonNull(createdAt);
        this.createdAt = createdAt;
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String uploadId, String fileName, String contentType, String createdAt) {
      super.uploadId(uploadId)
        .fileName(fileName)
        .contentType(contentType)
        .createdAt(createdAt);
    }
    
    @Override
     public CopyOfBuilder uploadId(String uploadId) {
      return (CopyOfBuilder) super.uploadId(uploadId);
    }
    
    @Override
     public CopyOfBuilder fileName(String fileName) {
      return (CopyOfBuilder) super.fileName(fileName);
    }
    
    @Override
     public CopyOfBuilder contentType(String contentType) {
      return (CopyOfBuilder) super.contentType(contentType);
    }
    
    @Override
     public CopyOfBuilder createdAt(String createdAt) {
      return (CopyOfBuilder) super.createdAt(createdAt);
    }
  }
  
}
