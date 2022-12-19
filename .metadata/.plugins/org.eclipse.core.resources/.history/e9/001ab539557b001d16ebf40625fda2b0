package kr.or.project.main.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.project.main.model.DamInfo;
import kr.or.project.main.model.NoticeInfo;
import kr.or.project.main.model.WalInfo;
import kr.or.project.main.service.MainService;
import kr.or.project.mapper.MainMapper;

@Service
public class MainServiceImpl implements MainService {
	
	@Autowired
	private MainMapper mapper;
	
	@Override
	public List<DamInfo> selectDam() {
		try {
			return mapper.selectDam();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<NoticeInfo> selectMainInfo(NoticeInfo noticeInfo) {
		try {
			return mapper.selectMainInfo(noticeInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<WalInfo> selectWal() {
		try {
			return mapper.selectWal();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	/*
	 * @Override public List<DamInfo> selectDam() { // TODO Auto-generated method
	 * stub return null; }
	 */
}
