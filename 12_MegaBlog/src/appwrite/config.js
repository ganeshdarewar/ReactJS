import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";
export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (e) {
      console.log("createpost errr", e);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (e) {
      console.log("update post", e);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionID,
        slug
      );
      return true;
    } catch (e) {
      console.log("delete post", e);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionID,
        slug
      );
    } catch (e) {
      console.log("getpost", e);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionID,
        queries
      );
    } catch (e) {
      console.log("getPosts", e);
      return false;
    }
  }

  //   file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (e) {
      console.log("upload file", e);
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketID, fileId);
      return true;
    } catch (error) {
      console.log("delete file", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketID, fileId);
  }
}

const service = new Service();
export default service;
