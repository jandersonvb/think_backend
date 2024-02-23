import { Entity } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Device {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  local: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.devices)
  user: User;
}
