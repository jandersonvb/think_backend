import { Entity , Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";


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
