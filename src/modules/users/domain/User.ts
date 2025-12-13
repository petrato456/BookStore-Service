export type UserRole = "STAFF" | "CUSTOMER";
export type UserStatus = "ACTIVE" | "BLOCKED";


interface UserProps {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status?: UserStatus;
}

export class User {
  private readonly id: string;
  private readonly name: string;
  private readonly email: string;
  private role: UserRole;
  private status: UserStatus;

  constructor(props: UserProps) {
    this.validate(props);

    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.role = props.role;
    this.status = props.status ?? "ACTIVE";
  }

  private validate(props: UserProps) {
    if (!props.id) throw new Error("User must have an id");
    if (!props.name) throw new Error("User must have a name");
    if (!props.email) throw new Error("User must have an email");

    if (!["STAFF", "CUSTOMER"].includes(props.role)) {
      throw new Error("Invalid user role");
    }
  }

  isActive(): boolean {
    return this.status === "ACTIVE";
  }

  canRentBooks(): boolean {
    return this.isActive() && this.role === "CUSTOMER";
  }

  block() {
    this.status = "BLOCKED";
  }

  unblock() {
    this.status = "ACTIVE";
  }

  getId() {
    return this.id;
  }

  getRole() {
    return this.role;
  }

  getStatus() {
    return this.status;
  }
}
