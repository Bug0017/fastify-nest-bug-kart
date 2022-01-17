import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  title: string;

  @Column()
  imagePath: string;

  @Column({ type: 'real' })
  rating: string;

  @Column({ type: 'real' })
  price: string;

  @Column()
  description: string;

  @Column()
  discount: number;
}
