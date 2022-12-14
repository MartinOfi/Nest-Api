import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PostCategory } from "../enum";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  title: string;

  @Column({ type: "varchar", length: 150 })
  slug!: string;

  @Column({ type: "varchar", length: 255 })
  excerpt?: string;

  @Column({ type: "text" })
  content!: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  category: string;

  @Column({ type: "simple-array" })
  tags: string[];

  @Column({ type: "bool", default: true })
  status: boolean;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;
}
