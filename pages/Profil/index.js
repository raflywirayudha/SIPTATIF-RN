import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import {
  Avatar,
  Input,
  Select,
  SelectItem,
  Button,
} from "@ui-kitten/components";

const useSelectState = (initialState = undefined) => {
  const [selectedIndex, setSelectedIndex] = useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

const Profil = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tel, setTel] = useState("");
  const [tl, setTl] = useState("");
  const [file, setFile] = useState("");
  const agama = useSelectState();
  const angkatan = useSelectState();
  const jk = useSelectState();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Avatar
          source={require("../../assets/sjw.jpeg")}
          style={{ width: 180, height: 180, alignSelf: "center", margin: 15 }}
        />
        <Button style={{ alignSelf: "center" }} appearance="ghost">
          Ubah Foto
        </Button>
        <Input
          style={styles.input}
          value={nama}
          label="Nama Mahasiswa"
          onChangeText={(nextValue) => setNama(nextValue)}
        />

        <View style={styles.inlineInput}>
          <Input
            style={[styles.input, { flex: 1.2 }]}
            value={nim}
            inputMode="numeric"
            label="Nomor Induk Mahasiswa"
            onChangeText={(nextValue) => setNim(nextValue)}
          />
          <Select
            style={[styles.select, { marginLeft: 10, flex: 1 }]}
            label="Angkatan"
            placeholder="Pilih Angkatan"
            {...angkatan}
          >
            <SelectItem title="Option 1" />
            <SelectItem title="Option 2" />
            <SelectItem title="Option 3" />
          </Select>
        </View>

        <View style={styles.inlineInput}>
          <Select
            style={[styles.select, { flex: 1.2 }]}
            label="Jenis Kelamin"
            placeholder="Pilih Jenis Kelamin"
            {...jk}
          >
            <SelectItem title="Option 1" />
            <SelectItem title="Option 2" />
            <SelectItem title="Option 3" />
          </Select>
          <Input
            style={[styles.input, { marginLeft: 10, flex: 1 }]}
            value={tl}
            placeholder="DD/MM/YYYY"
            label="Tanggal Lahir"
            onChangeText={(nextValue) => setTl(nextValue)}
          />
        </View>

        <Input
          style={styles.input}
          value={email}
          label="Email Mahasiswa"
          onChangeText={(nextValue) => setEmail(nextValue)}
        />

        <Select
          style={styles.select}
          label="Agama"
          placeholder="Pilih Agama"
          {...agama}
        >
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>

        <Input
          style={styles.input}
          value={alamat}
          label="Alamat"
          onChangeText={(nextValue) => setAlamat(nextValue)}
        />

        <Input
          style={styles.input}
          value={tel}
          inputMode="numeric"
          label="Nomor Handphone"
          onChangeText={(nextValue) => setTel(nextValue)}
        />

        <Input
          style={styles.input}
          value={file}
          placeholder="Pilih File..."
          label="Berkas"
          onChangeText={(nextValue) => setFile(nextValue)}
        />

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 215,
          }}
        >
          <Button style={styles.button} status="basic">
            Batal
          </Button>
          <Button style={styles.button}>Simpan</Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  select: {
    width: "100%",
    paddingBottom: 15,
  },
  input: {
    width: "100%",
    paddingBottom: 15,
  },
  inlineInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default Profil;
