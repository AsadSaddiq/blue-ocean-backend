import { instanceToPlain } from 'class-transformer';
import { AfterLoad, BaseEntity } from 'typeorm';

export class EntityRelationalHelper extends BaseEntity {
  __entity?: string;

  @AfterLoad()
  setEntityName() {
    this.__entity = this.constructor.name;
  }

  toJSON() {
    return instanceToPlain(this);
  }
}

// import {
//   CreateDateColumn,
//   UpdateDateColumn,
//   DeleteDateColumn,
//   BaseEntity,
//   AfterLoad,
// } from 'typeorm';
// import { instanceToPlain } from 'class-transformer';

// export abstract class EntityRelationalHelper extends BaseEntity {
//   __entity?: string;

//   @CreateDateColumn()
//   createdAt: Date;

//   @UpdateDateColumn()
//   updatedAt: Date;

//   @DeleteDateColumn({ nullable: true })
//   deletedAt?: Date;

//   @AfterLoad()
//   setEntityName() {
//     this.__entity = this.constructor.name;
//   }

//   toJSON() {
//     return instanceToPlain(this);
//   }
// }
