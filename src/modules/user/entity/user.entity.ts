import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string

  @Column({ default: 'test' })
  username: string

  @Column({ default: '123456', select: false })
  password: string

  @Column({ default: 'avatar1.png' })
  avatar: string

  @Column({ default: 'user' })
  role: string

  @Column({ default: 'on' })
  status: string

  @Column({ default: '' })
  tag: string

  @Column({ type: 'double', default: new Date().valueOf() })
  createTime: number
}
